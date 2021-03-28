import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Statistics.css";

function Statistic() {
  const [totalPrice, setTotalPrice] = useState(0);

  const [inputValue, setInputValue] = useState("1");

  const [food, setFood] = useState(0);

  const [utilities, setUtilPrice] = useState(0);

  const [transport, setTransport] = useState(0);

  const [health, setHealth] = useState(0);

  const [personal, setPersonal] = useState(0);

  const [groceries, setGroceries] = useState(0);

  const setHeal = (health) => {
    setHealth(health);
    setPr(health);
  };

  const setPers = (personal) => {
    setPersonal(personal);
    setPr(personal);
  };

  const setGroc = (groceries) => {
    setGroceries(groceries);
    setPr(groceries);
  };

  const setTran = (tran) => {
    let a = Number(tran.toFixed(2));
    setTransport(a);
    setPr(tran);
  };
  let currentMonthNow = new Date().getMonth() + 1;

  const setValue = (value) => {
    setInputValue(value.target.value);
  };

  const setFoodPrice = (foodPrice) => {
    setFood(foodPrice);
    setPr(foodPrice);
  };

  const setUtilPr = (util) => {
    setUtilPrice(util);
    setPr(util);
  };

  const setPr = (pr = 0) => {
    let totalOftotal = 0;
    totalOftotal = food + utilities + transport + health + personal + groceries;

    setTotalPrice(totalOftotal);
  };

  useEffect(async () => {
    const response = await fetch(
      "https://spreadsheets.google.com/feeds/cells/1aFkZuswePNJIHP2s-R0dWNlxBkF03CbQ2vqP9wUwVmw/1/public/full?alt=json"
    );
    const data = await response.json();
    let transportPr = 0;
    let foodTotal = 0;
    let utilPr = 0;

    let medPr = 0;
    let persPr = 0;
    let grocPr = 0;

    let arr = " ";
    let test = " ";
    let a = 0;
    let b = 0;

    if (inputValue === "2") {
      if (data.feed.entry[2].content.$t === "Date") {
        for (let i = 0; i < data.feed.entry.length; i++) {
          if (data.feed.entry[i].gs$cell.col === "3") {
            arr = data.feed.entry[i].content.$t;
            arr = arr.split("/");
            test = Number(arr[1]);

            if (test == currentMonthNow) {
              b = i - 2;
              a = data.feed.entry[b].content.$t;
              a = Number(a);
              foodTotal += a;
            }
          }
        }
        for (let i = 0; i < data.feed.entry.length; i++) {
          if (data.feed.entry[i].gs$cell.col === "3") {
            arr = data.feed.entry[i].content.$t;
            arr = arr.split("/");
            test = Number(arr[1]);

            if (test == currentMonthNow) {
              b = i - 1;
              a = data.feed.entry[b].content.$t;
              a = Number(a);
              utilPr += a;
            }
          }
        }
        for (let i = 0; i < data.feed.entry.length; i++) {
          if (data.feed.entry[i].gs$cell.col === "3") {
            arr = data.feed.entry[i].content.$t;
            arr = arr.split("/");
            test = Number(arr[1]);

            if (test == currentMonthNow) {
              b = i + 1;
              a = data.feed.entry[b].content.$t;
              a = Number(a);
              transportPr += a;
            }
          }
        }
        for (let i = 0; i < data.feed.entry.length; i++) {
          if (data.feed.entry[i].gs$cell.col === "3") {
            arr = data.feed.entry[i].content.$t;
            arr = arr.split("/");
            test = Number(arr[1]);

            if (test == currentMonthNow) {
              b = i + 2;
              a = data.feed.entry[b].content.$t;
              a = Number(a);
              medPr += a;
            }
          }
        }
        for (let i = 0; i < data.feed.entry.length; i++) {
          if (data.feed.entry[i].gs$cell.col === "3") {
            arr = data.feed.entry[i].content.$t;
            arr = arr.split("/");
            test = Number(arr[1]);

            if (test == currentMonthNow) {
              b = i + 3;
              a = data.feed.entry[b].content.$t;
              a = Number(a);
              persPr += a;
            }
          }
        }
        for (let i = 0; i < data.feed.entry.length; i++) {
          if (data.feed.entry[i].gs$cell.col === "3") {
            arr = data.feed.entry[i].content.$t;
            arr = arr.split("/");
            test = Number(arr[1]);

            if (test == currentMonthNow) {
              b = i + 4;
              a = data.feed.entry[b].content.$t;
              a = Number(a);
              grocPr += a;
            }
          }
        }
      }
    }

    if (inputValue === "1") {
      if (data.feed.entry[1].content.$t === "Utilities ") {
        for (let i = 0; i < data.feed.entry.length; i++) {
          if (data.feed.entry[i].gs$cell.col === "2") {
            if (!isNaN(data.feed.entry[i].content.$t))
              utilPr += Number(data.feed.entry[i].content.$t);
          }
        }
      }
      if (data.feed.entry[0].content.$t === "Food") {
        for (let i = 0; i < data.feed.entry.length; i++) {
          if (data.feed.entry[i].gs$cell.col === "1") {
            if (!isNaN(data.feed.entry[i].content.$t))
              foodTotal += Number(data.feed.entry[i].content.$t);
          }
        }
      }
      if (data.feed.entry[3].content.$t === "Transportation") {
        for (let i = 0; i < data.feed.entry.length; i++) {
          if (data.feed.entry[i].gs$cell.col === "4") {
            if (!isNaN(data.feed.entry[i].content.$t))
              transportPr += Number(data.feed.entry[i].content.$t);
          }
        }
      }
      if (data.feed.entry[4].content.$t === "Medical & Healthcare") {
        for (let i = 0; i < data.feed.entry.length; i++) {
          if (data.feed.entry[i].gs$cell.col === "5") {
            if (!isNaN(data.feed.entry[i].content.$t))
              medPr += Number(data.feed.entry[i].content.$t);
          }
        }
      }
      if (data.feed.entry[5].content.$t === "Personal Spending") {
        for (let i = 0; i < data.feed.entry.length; i++) {
          if (data.feed.entry[i].gs$cell.col === "6") {
            if (!isNaN(data.feed.entry[i].content.$t))
              persPr += Number(data.feed.entry[i].content.$t);
          }
        }
      }
      if (data.feed.entry[6].content.$t === "Groceries/Dinning") {
        for (let i = 0; i < data.feed.entry.length; i++) {
          if (data.feed.entry[i].gs$cell.col === "7") {
            if (!isNaN(data.feed.entry[i].content.$t))
              grocPr += Number(data.feed.entry[i].content.$t);
          }
        }
      }
    }

    setFoodPrice(foodTotal);
    setUtilPr(utilPr);
    setTran(transportPr);
    setGroc(grocPr);
    setPers(persPr);
    setHeal(medPr);
  });

  return (
    <div className="container center">
      <form className="form">
        <div className=" bordet-bottom">
          <div className="form-check">
            <input
              onChange={setValue}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Previous Month
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={setValue}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="1"
              checked={inputValue}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Current Month
            </label>
          </div>
        </div>
        <div>
          <ul>
            <li>Food: {food}</li>
            <li>Healthcare: {health} </li>
            <li>Transportation: {transport}</li>
            <li>Utilities: {utilities}</li>
            <li>Personal Spending: {personal}</li>
            <li>Groceries: {groceries}</li>
            <li className="bordet-top">
              <b>Total: {totalPrice}</b>
            </li>
          </ul>
        </div>
        {/* 
        <input type="submit" value="Submit" className=" btn btn-primary" /> */}
      </form>

      <Link className=" btn btn-primary" to="/">
        Back
      </Link>
    </div>
  );
}

export default Statistic;
