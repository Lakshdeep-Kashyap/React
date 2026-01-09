import Form from "../components/Form.jsx"
import ExpensesList from "../components/ExpensesList.jsx"

// import {useLocalStorage} from "../hooks/useLocalStorage.js"

function Dashboard({setBalance,setAllExpenses}){
    // const [allexpenses,setAllExpenses] = 
    // useLocalStorage("allexpensesss",[
    //     {id:1,spent:1000,note:"Rent",category:"Rent"},
    //     {id:2,spent:200,note:"Ate-Out",category:"Food"}
    // ])

  function addIncome(i){
    if(i===0) return
    setBalance(prev=>Number(prev+i))
  }

  function addExpense(s,n,c){
    if(s===0){
      return
    }
    let newexp = {
      id:Date.now(),
      spent:s===0?0:s,
      note:n===""?"-":n,
      category:c===""?"Other":c
    }
    setAllExpenses(prev=>[...prev,newexp])
  }

  return(
    <>
      <Form
        addIncome={addIncome}
        addExpense={addExpense}
      />
    </>
  )
}

export default Dashboard