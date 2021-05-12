import {useState} from 'react'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)

  // const titleChangeHandler = () => {
  //   setTitle('updated');
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/*<div>{props.date.toISOString()}</div>*/}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
        {/* <button onClick={titleChangeHandler}>change title</button> */}
      </div>
    </Card>
  );
};

export default ExpenseItem;
