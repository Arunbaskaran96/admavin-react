import { useState } from "react";
import classes from "./infinitescroll.module.css";
import { useEffect } from "react";
import Loading from "../../components/loading/Loading";

function InfiniteScroll() {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [callApi, setCallApi] = useState(true);

  // handle scroll bar
  useEffect(() => {
    const scrollHandler = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 1
      ) {
        setSkip((s) => s + 20);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  // call api
  useEffect(() => {
    if (callApi) {
      fetchProducts();
    }
  }, [skip]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?skip=${skip}&limit=20`
      );
      const { products: res } = await response.json();
      if (res.length === 0) {
        setCallApi(false);
      }
      setData([...data, ...res]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const listingProducts =
    data &&
    data.map((item) => {
      return (
        <li className={classes.list} key={item.id}>
          <img className={classes.image} src={item.images[0]} alt="prodImage" />
          <h2>{item.title}</h2>
          <p>{item.price}</p>
        </li>
      );
    });
  return (
    <div className={classes.container}>
      <ul className={classes.lists}>{data && listingProducts}</ul>
      {isLoading && (
        <div className={classes.flexContainer}>
          <Loading />
        </div>
      )}
    </div>
  );
}

export default InfiniteScroll;
