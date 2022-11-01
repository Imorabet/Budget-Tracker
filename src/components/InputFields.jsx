import React, { useState } from "react";
import { uniqueId } from "../utils";

function InputFields({ onNewTransaction }) {
  const [nameValue, setNameValue] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  const addTransaction = (type, evt) => {
    evt.preventDefault();

    const data = {
      id: uniqueId(),
      name: nameValue,
      amount: parseInt(amountValue),
      cat: categoryValue,
      type: type,
    };

    onNewTransaction(data);

    setNameValue("");
    setAmountValue("");
    setCategoryValue("");
  };

  return (
    <div>
      <form className="transaction-form row g-3 w-75">
        <h2>keep track of your money!</h2>
        <div className="col-md-12">
          <input
            type="text"
            required
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            className="form-control"
            id="floatingInput"
            placeholder="Description"
          />
        </div>
        <div className="col-md-6">
          <input
            required
            type="number"
            className="form-control"
            value={amountValue}
            onChange={(e) => setAmountValue(e.target.value)}
            id="floatingPassword"
            placeholder="Amount"
          />
        </div>
        <div className="col-lg-6">
          <select
            name="cat"
            className="form-select"
            value={categoryValue}
            onChange={(e) => setCategoryValue(e.target.value)}
          >
            <option value="atr">Others</option>
            <option value="msn">House</option>
            <option value="edu">Education</option>
            <option value="vtr">Car</option>
            <option value="nrt">Food</option>
          </select>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-primary"
            onClick={(e) => addTransaction("income", e)}
          >
            Add Income
          </button>
        </div>
        <div className="col-md-6">
          <button
            className="btn btn-secondary"
            onClick={(e) => addTransaction("expense", e)}
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}

export default InputFields;
