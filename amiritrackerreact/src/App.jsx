import {Routes,Route} from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Charts from "./pages/Charts"
import Calendar from "./pages/Calendar"

import Navbar from "./components/Navbar"

// import {useLocalStorage} from "./hooks/useLocalStorage.js"
// import Form from "./components/Form.jsx"
// import ExpensesList from "./components/ExpensesList.jsx"

function App(){

  // const [allexpenses,setAllExpenses] = 
  // useLocalStorage("allexpensesss",[
  //   {id:1,spent:1000,note:"Rent",category:"Rent"},
  //   {id:2,spent:200,note:"Ate-Out",category:"Food"}
  // ])

  // function addExpense(s,n,c){
  //   let newexp = {
  //     id:Date.now(),
  //     spent:s===0?0:s,
  //     note:n===""?"-":n,
  //     category:c===""?"Other":c
  //   }
  //   setAllExpenses(prev=>[...prev,newexp])
  // }

  // function delExpense(id){
  //   const newarr = allexpenses.filter((exp) => (exp.id !== id))
  //   setAllExpenses(newarr)
  // }

  // return(
  //   <>
  //     <Form
  //       addExpense={addExpense}
  //     />
  //     <ExpensesList
  //       allexpenses={allexpenses}
  //       delExpense={delExpense}
  //     />
  //   </>
  // )

  return(
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/charts" element={<Charts/>}></Route>
        <Route path="/calendar" element={<Calendar/>}></Route>
      </Routes>
    </>
  )
}

export default App