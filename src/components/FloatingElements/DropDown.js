import React, { Fragment, useState, useEffect } from "react";
import "./DropDown.css";

const DropDown = () => {
  const [dropDownOpen, setdropDownOpen] = useState(false);
  const [displayedBikeData, setDisplayedBikeData] = useState([]);
  const [bikeDataArray, setBikeDataArray] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/61708c8aaa02be1d445c6419/1", {
      headers: {
        "X-Master-Key":
          "$2b$10$LjjJelon4pXUIxSAurElm.g8au6hMfgUYw7kqyZ3z26nSalxG1o9i",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setBikeDataArray(response.record.bikes);
      });
  }, []);

  const dropDownClickHandler = (event) => {
    let input = event.target.value;

    if (input !== 0) {
      setdropDownOpen(true);
      setDisplayedBikeData(bikeDataArray[Number(input) - 1]);
    } else {
      setdropDownOpen(false);
    }
  };

  return (
    <Fragment>
      <div>
        <form>
          <select
            className="dropdownsAreAwesome"
            onChange={dropDownClickHandler}
          >
            <option value="0">Choose your bike...</option>
            <option value="1">Track Bike</option>
            <option value="2">Mountain Bike</option>
            <option value="3">Cruiser</option>
            <option value="4">Road Bike</option>
          </select>
        </form>
        {dropDownOpen ? <p className="bike-text">{displayedBikeData}</p> : null}
      </div>
    </Fragment>
  );
};

export default DropDown;
