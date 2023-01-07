import { faBook, faBowlFood, faCar, faCartPlus, faHouse, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdDelete, MdDirectionsCar, MdFastfood, MdHome, MdOutlineAddShoppingCart } from "react-icons/md";
import { ImBooks} from "react-icons/im";
import React from "react";
const conditions = (cat) => {
    switch (cat) {
      case "msn":
       return (
        <span><MdHome /> </span>
        );
      case "vtr":
        return (
          <span><MdDirectionsCar /></span>
        );
      case "edu":
        return (<span><ImBooks/></span> 
        );
      case "nrt":
        return ( <span><MdFastfood /></span>
        );
      default:
        return (
          <span> <MdOutlineAddShoppingCart/></span>
        );
    }
  };
function Transactions({ transactions, onDeleteTransaction }) {
  return (
    <div>
      <ul className="transactions">
        <h2>Your Expenses and Incomes</h2>
        <br />
        {transactions.map((data) => (
          <li key={data.id}>
                {conditions(data.cat)}
            <div>{data.name}</div>
            <div>
              <span>{data.amount} DH</span>
              <button className="deleteBtn" onClick={() => onDeleteTransaction(data.id)}>
                <MdDelete/>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
