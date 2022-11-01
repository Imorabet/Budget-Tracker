import React, { useState, useEffect } from "react";
import InputFields from "./InputFields";
import swal from "sweetalert";
import BarChart from "./LineChart";
import Transactions from "./Transactions";
import CatChart from "./CatChart";
import Header from "./Header";

//budget §_§

function BudgetApp() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const saveState = () => {
    localStorage.setItem("expenseTrackerState", JSON.stringify(transactions));
  };

  const calculateExpenses = () => {
    let income = 0,
      expense = 0;

    transactions.forEach((data) => {
      if (data.type === "income") {
        income += data.amount;
      } else if (data.type === "expense") {
        expense += data.amount;
      }
    });

    saveState();

    setIncome(income);
    setExpense(expense);
  };

  const handleAddNewTransaction = (item) => {
    let newTransactions = [...transactions, item];
    setTransactions(newTransactions);
  };

  const notifi = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const newTransactions = transactions.filter((item) => item.id != id);
        setTransactions(newTransactions);
        swal("Poof! Your expense has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your exspense is safe :)");
      }
    });
  };

  useEffect(() => {
    let localState = JSON.parse(localStorage.getItem("expenseTrackerState"));
    if (localState) {
      setTransactions(localState);
    } else {
      calculateExpenses();
    }
  }, []);

  useEffect(() => {
    calculateExpenses();
  }, [transactions]);

  return (
    <div className="app">
      <div className="header">
        <h1>Budget Tracker</h1>
        <Header income={income} expense={expense} />
      </div>
      <div className="body">
        <InputFields onNewTransaction={handleAddNewTransaction} />
        <div className="ChartT_T">
          <Transactions
            transactions={transactions}
            onDeleteTransaction={notifi}
          />
          <BarChart income={income} expense={expense} />
          <CatChart transactions={transactions} />
        </div>
      </div>
    </div>
  );
}

export default BudgetApp;
