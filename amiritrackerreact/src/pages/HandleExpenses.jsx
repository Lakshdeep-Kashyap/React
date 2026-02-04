import Form from "../components/Form.jsx"

import "../css/Dashboard.css"

// import {useLocalStorage} from "../hooks/useLocalStorage.js"

function HandleExpenses({setAllTransactions}){
    // const [allexpenses,setAllExpenses] = 
    // useLocalStorage("allexpensesss",[
    //     {id:1,spent:1000,note:"Rent",category:"Rent"},
    //     {id:2,spent:200,note:"Ate-Out",category:"Food"}
    // ])

  function addTransactions(a,n,c,t){
    if(a===0){
      return
    }
    let trans = {
      id:Date.now(),
      amount:a===0?0:a,
      note:n===""?"-":n,
      category:c===""?"income5":c,
      type:t||"expense"
    }
    setAllTransactions(prev=>[...prev,trans])
  }

  return(
    <>
      <Form               
        addTransactions={addTransactions}
      />
    </>
  )
}

export default HandleExpenses