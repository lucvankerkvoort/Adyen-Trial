import { EPERM } from "constants";
import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { store } from "../app/storage";

const Donations = () => {
  const [userInput, setUserInput] = useState("");
  const userData = useContext(store);
  const { dispatch } = userData;

  const invalid = userInput === "" || userInput < 100;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!invalid) {
      dispatch({ type: "donation", payload: userInput });
      history.push("/donate/dropin");
    } else {
      if (userInput < 100) {
        alert("increase your donation size or choose another option");
      } else {
        alert("fill in an amount first");
      }
    }
  };
  const history = useHistory();
  console.log(userData.state);
  const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };
  return (
    <div>
      <h1>Donations</h1>
      <li
        className="integration-list-item integration-list-item-link"
        onClick={() => {
          dispatch({ type: "donation", payload: 25 });
          history.push("/donate/dropin");
        }}
      >
        <div className="title-container">
          <p className="integration-list-item-title">$25</p>
        </div>
      </li>
      <li
        className="integration-list-item integration-list-item-link"
        onClick={() => {
          dispatch({ type: "donation", payload: 50 });
          history.push("/donate/dropin");
        }}
      >
        <div className="title-container">
          <p className="integration-list-item-title">$50</p>
        </div>
      </li>
      <li
        className="integration-list-item integration-list-item-link"
        onClick={() => {
          dispatch({ type: "donation", payload: 100 });
          history.push("/donate/dropin");
        }}
      >
        <div className="title-container">
          <p className="integration-list-item-title">$100</p>
        </div>
      </li>
      <li className="integration-list-item">
        <div className="title-container">
          <p className="integration-list-item-title">
            <form onSubmit={handleSubmit}>
              $<input onChange={(e) => handleChange(e)} />
            </form>
          </p>
        </div>
      </li>
    </div>
  );
};
export default Donations;
