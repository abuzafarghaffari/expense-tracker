import {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props)=>{

    const [show,setHide] = useState(false);
const saveExpenseDataHandler = (enteredExpenseData)=>{
const expenseData ={
    ...enteredExpenseData,
    id:Math.random().toString()
}

props.onAddExppense(expenseData);

showHandler();
}

const showHandler =()=>{
    setHide((prevState)=>{
      return !prevState;
    });
}

return (
<div className="new-expense">

{show ? <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} show ={showHandler}/> :<button onClick ={showHandler}>Add new  </button> }
    
</div>
);
}

export default NewExpense;