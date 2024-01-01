// ExpenseItem.js
import React from "react";
import Card from "./Card";
import ExpenseDate from "ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  return (
    <Card>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          title={props.title}
          amount={props.amount}
          location={props.locationOfExpenditure}
        />
      </div>
    </Card>
  );
};

export default ExpenseItem;
