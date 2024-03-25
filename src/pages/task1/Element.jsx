import { useState } from "react";
import classes from "./element.module.css";

function Element() {
  const [bucketOne, setBucketOne] = useState([
    {
      title: "item 1",
      id: "12345",
      selected: false,
    },
    {
      title: "item 2",
      id: "74296",
      selected: false,
    },
    {
      title: "item 3",
      id: "741258",
      selected: false,
    },
  ]);

  const [bucketTwo, setBucketTwo] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [removeItem, setRemoveitem] = useState([]);

  const handleBucketOne = (item) => {
    const element = document.getElementById(item.id);
    element.classList.add(classes["active"]);
    setSelectedItems([...selectedItems, item.id]);
  };

  const handleBucketTwo = (item) => {
    setRemoveitem([...removeItem, item.id]);
  };

  const listingBucketOne =
    bucketOne &&
    bucketOne.map((item) => {
      return (
        <li
          onClick={() => handleBucketOne(item)}
          className={classes.list}
          key={item.id}
          id={item.id}
        >
          {item.title}
        </li>
      );
    });

  const listingBucketTwo =
    bucketTwo &&
    bucketTwo.map((item) => {
      return (
        <li
          onClick={() => handleBucketTwo(item)}
          className={classes.list}
          key={item.id}
          id={item.id}
        >
          {item.title}
        </li>
      );
    });

  const addHandler = () => {
    if (selectedItems.length === 0) {
      alert("Atleast select one item from bucket one");
    }
    const temp = [];
    const filter = bucketOne
      .map((item) => {
        if (selectedItems.includes(item.id)) {
          temp.push(item);
          return item;
        } else {
          return item;
        }
      })
      .filter((item) => !selectedItems.includes(item.id));
    setBucketTwo([...bucketTwo, ...temp]);
    setBucketOne(filter);
    setSelectedItems([]);
  };

  const addAllHandler = () => {
    setBucketTwo([...bucketTwo, ...bucketOne]);
    setBucketOne([]);
  };

  const removeAllHandler = () => {
    setBucketOne([...bucketOne, ...bucketTwo]);
    setBucketTwo([]);
  };

  console.log(removeItem);
  const removeHandler = () => {
    if (bucketTwo.length === 0) {
      alert("You can't remove any item because bucket two is empty");
    }
    if (bucketTwo.length > 0 && removeItem.length === 0) {
      alert("Please select atleast one item from bucket two");
    }
    const temp = [];
    const filter = bucketTwo
      .map((item) => {
        if (removeItem.includes(item.id)) {
          temp.push(item);
          return item;
        } else {
          return item;
        }
      })
      .filter((item) => !removeItem.includes(item.id));
    setBucketOne([...bucketOne, ...temp]);
    setBucketTwo(filter);
    setRemoveitem([]);
  };
  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.heading}>Bucket One</h1>
        <div className={classes.bucketOne}>
          {bucketOne.length > 0 && listingBucketOne}
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={addHandler}>Add</button>
        <button onClick={removeHandler}>Remove</button>
        <button onClick={addAllHandler}>AddAll</button>
        <button onClick={removeAllHandler}>RemoveAll</button>
      </div>
      <div>
        <h1 className={classes.heading}>Bucket Two</h1>
        <div className={classes.bucketOne}>
          {bucketTwo.length > 0 && listingBucketTwo}
        </div>
      </div>
    </div>
  );
}

export default Element;
