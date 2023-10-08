import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
const HomePage = () => {
  const [expData, setexpData] = useState();

  const getAllData = async () => {
    try {
      const getPeople = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getallExpense`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getPeople.json();
      setexpData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  },[]);
  console.log(expData);



  return (
    <>
      <section>
        <div>
          <div>
            <h2>
              Expense
            </h2>
            <p>
              This is a list of all expense. You can add new expense.
            </p>
          </div>
          
        </div>
        <div>
          <div>
            <div >
              <div >
                <table >
                  <thead >
                    <tr>
                      <th
                        scope="col"
                       
                      >
                        <span>Expense</span>
                      </th>
                      <th
                        scope="col"
                       
                      >
                        Date
                      </th>

                      <th
                        scope="col"
                        
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {expData?.data.map((person) => (
                      <tr key={person.name}>
                        <td>
                          <div >
                           
                            <div >
                              <div >
                                {person.name}
                              </div>
                        
                            </div>
                          </div>
                        </td>
                        <td >
                          <div >
                            {person.date}
                          </div>
                          
                        </td>

                        <td >
                          {person.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Link to={"/addExpense"}>
            <div>
              <button >
                Add Expense
              </button>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
