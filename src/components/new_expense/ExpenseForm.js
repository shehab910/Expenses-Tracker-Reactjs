import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //* max prefers that way
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    //* perfered way to max (best way)
    setEnteredTitle(event.target.value);
    // *bad way (depending on past state & react schedule changes to state)
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    //*better way
    // setUserInput((pervState) => {
    //   return { ...pervState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    //* perfered way to max (best way)
    setEnteredAmount(event.target.value);
    // *bad way (depending on past state & react schedule changes to state)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    //*better way
    // setUserInput((pervState) => {
    //     return {...pervState, enteredAmount: event.target.value};
    // });
  };

  const dateChangeHandler = (event) => {
    //* perfered way to max (best way)
    setEnteredDate(event.target.value);
    // setUserInput((pervState) => {
    //   return { ...pervState, enteredDate: event.target.value };
    // });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
