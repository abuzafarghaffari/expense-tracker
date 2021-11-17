import {useState} from "react"
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props){

    const expenses = props.items; //data 
    const  [select,setSelect] = useState("2020");

const filterChangeHandler = (filtervalue)=>{

    setSelect(filtervalue);
  }

  //

  const filteredExpenses= expenses.filter(expense=>{
      return expense.date.getFullYear().toString() === select;
  })


return(
<Card className="expenses" >
<div>
    <ExpensesFilter onExpenseFilter ={filterChangeHandler} select = {select}/>
<ExpensesChart  expenses ={filteredExpenses} />
   <ExpensesList items ={filteredExpenses}/>


</div>
</Card>
)

}

export default Expenses;