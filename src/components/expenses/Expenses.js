import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import {useState} from 'react'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {
        props.items.map((expense) => {
          return(<ExpenseItem date={expense.date} title={expense.title} price={expense.amount} />);
        })
      }

      {/* <ExpenseItem date={expenses[0].date} title={expenses[0].title} price={expenses[0].amount} />
      <ExpenseItem date={expenses[1].date} title={expenses[1].title} price={expenses[1].amount} />
      <ExpenseItem date={expenses[2].date} title={expenses[2].title} price={expenses[2].amount} />
      <ExpenseItem date={expenses[3].date} title={expenses[3].title} price={expenses[3].amount} /> */}

    </Card>
  );
}

export default Expenses;