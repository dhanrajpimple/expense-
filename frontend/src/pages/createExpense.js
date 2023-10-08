import React from "react";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import ExpenseForm from "../components/ExpenseForm";
import "./dp.css";
const CreateExpense = () => {
  return (
    <section>
      <div>
        
        <div>
          <div>
            <h2>
              Create a Expense
            </h2>
            <p id="dp" >
              <Link
                to={"/"}
            
              >
                <FaBackward />
                Back to all Expense List
              </Link>
            </p>

            <ExpenseForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateExpense;
