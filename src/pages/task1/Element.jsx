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
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [removeItem, setRemoveitem] = useState(new Set());

  const handleBucketOne = (item) => {
    if (selectedItems.has(item.id)) {
      const element = document.getElementById(item.id);
      element.classList.remove(classes["active"]);
      const temp = [...selectedItems].filter((id) => id != item.id);
      setSelectedItems(new Set(temp));
    } else {
      const element = document.getElementById(item.id);
      element.classList.add(classes["active"]);
      setSelectedItems(selectedItems.add(item.id));
    }
  };

  const handleBucketTwo = (item) => {
    if (removeItem.has(item.id)) {
      const element = document.getElementById(item.id);
      element.classList.remove(classes["remove"]);
      const temp = [...removeItem].filter((id) => id != item.id);
      setRemoveitem(new Set(temp));
    } else {
      const element = document.getElementById(item.id);
      element.classList.add(classes["remove"]);
      setRemoveitem(removeItem.add(item.id));
    }
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
    if (selectedItems.size === 0) {
      alert("Atleast select one item from bucket one");
    }
    const temp = [];
    const filter = bucketOne
      .map((item) => {
        if (selectedItems.has(item.id)) {
          temp.push(item);
          return item;
        } else {
          return item;
        }
      })
      .filter((item) => !selectedItems.has(item.id));
    setBucketTwo([...bucketTwo, ...temp]);
    setBucketOne(filter);
    setSelectedItems(new Set());
  };

  const addAllHandler = () => {
    setBucketTwo([...bucketTwo, ...bucketOne]);
    setBucketOne([]);
  };

  const removeAllHandler = () => {
    setBucketOne([...bucketOne, ...bucketTwo]);
    setBucketTwo([]);
  };

  const removeHandler = () => {
    if (bucketTwo.length === 0) {
      alert("You can't remove any item because bucket two is empty");
    }
    if (bucketTwo.length > 0 && removeItem.size === 0) {
      alert("Please select atleast one item from bucket two");
    }
    const temp = [];
    const filter = bucketTwo
      .map((item) => {
        if (removeItem.has(item.id)) {
          temp.push(item);
          return item;
        } else {
          return item;
        }
      })
      .filter((item) => !removeItem.has(item.id));
    setBucketOne([...bucketOne, ...temp]);
    setBucketTwo(filter);
    setRemoveitem(new Set());
  };

  return (
    <>
      <div className={classes.container}>
        <div>
          <h1 className={classes.heading}>Bucket One</h1>
          <div className={classes.bucketOne}>
            {bucketOne.length > 0 && listingBucketOne}
          </div>
        </div>
        <div className={classes.actions}>
          <button disabled={bucketOne.length === 0} onClick={addHandler}>
            Add
          </button>
          <button disabled={bucketTwo.length === 0} onClick={removeHandler}>
            Remove
          </button>
          <button disabled={bucketOne.length === 0} onClick={addAllHandler}>
            AddAll
          </button>
          <button disabled={bucketTwo.length === 0} onClick={removeAllHandler}>
            RemoveAll
          </button>
        </div>
        <div>
          <h1 className={classes.heading}>Bucket Two</h1>
          <div className={classes.bucketOne}>
            {bucketTwo.length > 0 && listingBucketTwo}
          </div>
        </div>
      </div>
      <div className={classes.instructionContainer}>
        <div className={classes.instruction}>
          <h4>Instruction</h4>
          <ul>
            <li className={classes.lists}>
              User can add items from bucket one to two
            </li>
            <li className={classes.lists}>
              User can remove items from bucket two to one
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Element;
