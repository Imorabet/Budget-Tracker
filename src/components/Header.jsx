import React from "react";

function Header({ income, expense }) {
  return (
      <div className="myrow">
        <div className="mycol col-balance">
          <h3 className="balance-text">Balance</h3>
          <div className="balance-text">{income - expense} DH</div>
        </div>
        <div className="mycol col-income">
          <h3 className="income-text">Income</h3>
          <div className="income-text">{income} DH</div>
        </div>
        <div className="mycol col-expense">
          <h3 className="expense-text">Expense</h3>
          <div className="expense-text">{expense} DH</div>
        </div>
      </div>
  
  );
}

export default Header;
