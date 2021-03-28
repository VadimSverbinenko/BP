import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Statistics.css";

function Statistic2() {
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
    setTransport(tran);
    setPr(tran);
  };
  let currentMonthNow = new Date().getMonth() + 1;

  const setValue = (value) => {
    setInputValue(value.target.value);
    runProperty(value.target.value);
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
  let data;

  function getData() {
    data = JSON.parse(localStorage.getItem("data"));
  }
  function runProperty(val) {
    calculateItemTotalFood(val);
    calculateItemTotalUtilities();
    calculateItemTotalTransport();
    calculateItemTotalHealth();
    calculateItemTotalPersonal();
    calculateItemTotalGroceries();
    setPr();
  }
  useEffect(() => {
    getData();
    runProperty(inputValue);
  }, []);

  function calculateItemTotalFood(val) {
    let result = 0;
    let currMon = new Date().getMonth() + 1;
    if (val === "1") {
      for (let i = 0; i < data.length; i++) {
        if (Number(data[i].date.split("/")[1]) === currMon) {
          result += Number(data[i].food);
        }
      }
    } else if (val === "2") {
      for (let i = 0; i < data.length; i++) {
        if (Number(data[i].date.split("/")[1]) === currMon - 1) {
          result += Number(data[i].food);
        }
      }
    }

    setFoodPrice(result);
  }
  function calculateItemTotalUtilities() {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
      result += Number(data[i].utilities);
    }
    setUtilPr(result);
  }
  function calculateItemTotalTransport() {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
      result += Number(data[i].transportation);
    }
    setTran(result);
  }
  function calculateItemTotalHealth() {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
      result += Number(data[i].health);
    }
    setHeal(result);
  }
  function calculateItemTotalPersonal() {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
      result += Number(data[i].personal);
    }
    setPers(result);
  }
  function calculateItemTotalGroceries() {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
      result += Number(data[i].groceries);
    }
    setGroc(result);
  }

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
      </form>

      <Link className=" btn btn-primary" to="/">
        Back
      </Link>
    </div>
  );
}

export default Statistic2;
