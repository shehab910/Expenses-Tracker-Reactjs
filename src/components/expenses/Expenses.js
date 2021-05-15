import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredExpenses = props.items.filter(
    (expense) =>
      filteredYear === new Date(expense.date).getFullYear().toString()
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      {/* *anotherway* */}
      {/* {filteredExpenses.length === 0 && <p>No Expenses Found.</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          price={expense.amount}
          key={expense.id}
        />
      ))} */}
    </Card>
  );
}

export default Expenses;
