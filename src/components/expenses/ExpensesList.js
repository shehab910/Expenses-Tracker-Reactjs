import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const filteredExpenses = props.items;
  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          price={expense.amount}
          key={expense.id}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
