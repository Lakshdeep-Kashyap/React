import {useLocalStorage} from "../hooks/useLocalStorage.js"
import Form from "../components/Form.jsx"
import ExpensesList from "../components/ExpensesList.jsx"

function Dashboard(){
    const [allexpenses,setAllExpenses] = 
    useLocalStorage("allexpensesss",[
        {id:1,spent:1000,note:"Rent",category:"Rent"},
        {id:2,spent:200,note:"Ate-Out",category:"Food"}
    ])

  function addExpense(s,n,c){
    let newexp = {
      id:Date.now(),
      spent:s===0?0:s,
      note:n===""?"-":n,
      category:c===""?"Other":c
    }
    setAllExpenses(prev=>[...prev,newexp])
  }

  function delExpense(id){
    const newarr = allexpenses.filter((exp) => (exp.id !== id))
    setAllExpenses(newarr)
  }

  return(
    <>
      <Form
        addExpense={addExpense}
      />
      <ExpensesList
        allexpenses={allexpenses}
        delExpense={delExpense}
      />
    </>
  )
}

export default Dashboard