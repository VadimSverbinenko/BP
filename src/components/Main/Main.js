import React, { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import GoogleSheetsProvider from "react-db-google-sheets";

function Main() {
  const [data, setData] = useState({
    food: 0,
    health: 0,
    transportation: 0,
    utilities: 0,
    personal: 0,
    groceries: 0,
  });

  const { food, health, transportation, utilities, personal, groceries } = data;

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(
  //       // "https://docs.google.com/spreadsheets/d/e/2PACX-1vT61MCAWfYnGX522bFcM3wduSXArC4M9CnZei7ia0emHNl1xMT5WHKD2n0ZicDY9gTYCNt-Siqf-qWJ/pubhtml?gid=0&single=true"

  //       // "https://spreadsheets.google.com/feeds/cells/1aFkZuswePNJIHP2s-R0dWNlxBkF03CbQ2vqP9wUwVmw/:batchUpdate"
  //       // "https://spreadsheets.google.com/feeds/cells/2PACX-1vT61MCAWfYnGX522bFcM3wduSXArC4M9CnZei7ia0emHNl1xMT5WHKD2n0ZicDY9gTYCNt-Siqf-qWJ/:batchUpdate",
  //       "https://sheet.best/api/sheets/48f4a4e8-43a0-4c73-8a17-df97a3df140a",
  //       {
  //         method: "POST",
  //         mode: "cors",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify([
  //           [
  //             food,
  //             health,
  //             new Date().toLocaleString(),
  //             transportation,
  //             utilities,
  //             personal,
  //             groceries,
  //           ],
  //         ]),
  //       }
  //     );
  //     await response.json();

  //     setData((data) => {
  //       return {
  //         ...data,
  //         food: 0,
  //         health: 0,
  //         transportation: 0,
  //         utilities: 0,
  //         personal: 0,
  //         groceries: 0,
  //       };
  //     });
  //     changeList(0);

  //     changeValue();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  let bodyyy = {
    Food: "1",
    "Utilities ": "1",
    Date: "19/03/2021, 14:33:50",
    Transportation: "1",
    "Medical & Healthcare": "1",
    "Personal Spending": "1",
    "Groceries/Dinning": "1",
  };

  const handleSubmit = () => {};
  fetch("https://sheet.best/api/sheets/48f4a4e8-43a0-4c73-8a17-df97a3df140a")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  console.log("zzzzzzzzzzzzzzzzzz");
  const handleSubmita = () => {};
  fetch("https://sheet.best/api/sheets/48f4a4e8-43a0-4c73-8a17-df97a3df140a", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyyy),
  })
    .then((r) => r.json())
    .then((data) => {
      // The response comes here
      console.log(data);
    })
    .catch((error) => {
      // Errors are reported there
      console.log(error);
    });

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
      <Link className=" btn btn-primary" to="/statistic">
        Statistics
      </Link>
    </div>
  );
}

export default Main;
