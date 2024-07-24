import React from "react";

const TransactionList = ({ expenses, removeExpense }) => {
  return (
    <div>
      <ul className="list-group mt-3">
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className={`list-group-item d-flex 
                                    justify-content-between
                                    align-items-center 
                                    ${
                                      expense.type === "expense"
                                        ? "text-danger"
                                        : "text-success"
                                    }`}
          >
            <div>
              <h4>
                {expense.description} - ${expense.amount}
              </h4>
              <small className="text-muted">{expense.date}</small>
            </div>
            <div>
              <button
                className="btn btn-danger"
                onClick={() => removeExpense(expense.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
