import React, { useState, useEffect } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  //To add and test previous month
  // let s = "27/02/2021, 13:00:42";

  const [data, setData] = useState({
    food: 0,
    health: 0,
    transportation: 0,
    utilities: 0,
    personal: 0,
    groceries: 0,
    date: new Date().toLocaleString(),
    id: Math.floor(Math.random() * 1000 + 1),
  });

  const {
    food,
    health,
    transportation,
    utilities,
    personal,
    groceries,
    date,
    id,
  } = data;

  const [nameOfList, setCurrentValue] = useState(() => {
    return "food";
  });
  const [valueOfList, setCurrentList] = useState(() => {
    return 0;
  });

  const changeList = (newList) => {
    setCurrentList(newList);
  };

  const changeValue = (newValue = "food") => {
    if (newValue === "food") {
      setCurrentValue(newValue);
    } else {
      setCurrentValue(newValue.target.value);
    }
  };
  const handleChange = (e) => {
    if (e.target.name === "food") {
      let foods = e.target.value;
      changeList(foods);
    } else if (e.target.name === "health") {
      let healths = e.target.value;
      changeList(healths);
    } else if (e.target.name === "transportation") {
      let healths = e.target.value;
      changeList(healths);
    } else if (e.target.name === "utilities") {
      let healths = e.target.value;
      changeList(healths);
    } else if (e.target.name === "personal") {
      let healths = e.target.value;
      changeList(healths);
    } else if (e.target.name === "groceries") {
      let healths = e.target.value;
      changeList(healths);
    }

    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    getLocalData();
  }, []);

  const handleSubmit = () => {
    addItem(data);
  };

  const getLocalData = () => {
    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", JSON.stringify([]));
    }
  };

  // add item
  function addItem(item) {
    let value = getData();
    value.push(item);
    localStorage.setItem("data", JSON.stringify(value));
  }
  // remove get data
  function getData() {
    return JSON.parse(localStorage.getItem("data"));
  }

  return (
    <div className="container center">
      <form className="form">
        <h3 className="text-center mb-5">Budget Planner</h3>
        <select
          className="form-control"
          onChange={changeValue}
          value={nameOfList}
        >
          <option value="food">Food</option>
          <option value="health">Healthcare</option>
          <option value="transportation">Transportation</option>
          <option value="utilities">Utilities</option>
          <option value="personal">Personal Spending:</option>
          <option value="groceries">Groceries</option>
        </select>
      </form>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="lable" htmlFor="name">
            Enter amount:
          </label>
          <input
            type="number"
            className="form-control"
            name={nameOfList}
            value={valueOfList}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="submit"
            value="Submit"
            className=" btn btn-primary lable"
          />
        </div>
      </form>
      <Link className=" btn btn-primary" to="/statistics">
        Statistics
      </Link>
      <Link className=" btn btn-primary" to="/statistics2">
        Statistics2
      </Link>
    </div>
  );
}

export default Main;
