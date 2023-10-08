import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Expense.css";


const ExpenseForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const CreateExpense = async (data) => {

    const savedUserResponse = await fetch(
      `${process.env.REACT_APP_BASE_URL}/createExpense`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data }),
      }
    );

    console.log("FORM RESPONSE......", savedUserResponse);

    navigate("/")
  };

  return (
    <div>
      <form onSubmit={handleSubmit(CreateExpense)} >
        <div >
          <div>
            <label
              htmlFor="name"
             
            >
              {" "}
              Expense Name{" "}
            </label>
            <div >
              <input
                
                type="text"
                placeholder="name of expense"
                {...register("name")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="date"
             
            >
              {" "}
              date{" "}
            </label>
            <div>
              <input
                
                type="date"
                placeholder="Enter the date"
                {...register("date")}
              ></input>
            </div>
          </div>

          <div>
            <label
              htmlFor="amount"
              
            >
              {" "}
              amount{" "}
            </label>
            <div >
              <input
               
                placeholder="Enter the amount"
                {...register("amount")}
              ></input>
            </div>
          </div>

          
          <div>
            <button
              type="submit"
         >
              Create Expense

            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
