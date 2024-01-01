// ExpenseDetails.js
import React from "react";
import "./ExpenseDetails.css";

const ExpenseDetails = (props) => {
  return (
    <div className="expense-details">
      <h2>{props.title}</h2>
      <div>${props.amount}</div>
      <div>{props.location}</div>
    </div>
  );
};

export default ExpenseDetails;
