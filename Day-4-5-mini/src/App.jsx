import { useState,useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Form from "./Form";
import ExpenseList from "./ExpenseList";

function App(){

  // const [Balance,setBalance] = useState(() => {
  // try {
  //   const saved = localStorage.getItem("Balance");
  //   const parsed = JSON.parse(saved);
    
  //   if(Number.isFinite(Number(parsed))){
  //     return parsed;
  //   } 
  //   else{
  //     throw new Error("Invalid data format");
  //   }
  // }
  //   catch (error) {
  //     console.warn("⚠️ LocalStorage data invalid, using defaults:", error);
  //     return 0;
  //   }
  // });

  const [Balance,setBalance] = useLocalStorage("Balance",0);

  const [ExpensesList,setExpensesList] = useState(() => {
  try {
    const saved = localStorage.getItem("ExpensesList");
    const parsed = JSON.parse(saved);
    
    // Ensure it's a valid array
    if(Array.isArray(parsed)){
      return parsed;
    } 
    else{
      throw new Error("Invalid data format");
    }
  }
    catch (error) {
      console.warn("⚠️ LocalStorage data invalid, using defaults:", error);
      return [
        { id: 1, note: "sth", spent: 69 },
        { id: 2, note: "Aaaaaanh!", spent: 69 }
      ];
    }
  });

  function updateIncome(earnt){
    setBalance(Balance + earnt);
  }

  function addExpense(spent,note){
    let newExp;
  
    if(spent !== ""){
      if(note === ""){
        newExp = {
            id: Date.now(),
            note: "---",
            spent: spent
          };
          if(Balance-spent<=0){
            alert("Out Of Money");
            setBalance(0);
          }
          else{
            setBalance(Balance-spent);
          }
          addExpenseToList(newExp.id,note,spent)
        return;
      }
      if(spent && note){
        newExp = {
            id: Date.now(),
            note: note,
            spent: spent
          }
          if(Balance-spent<=0){
            alert("Out Of Money");
            setBalance(0);
          }
          else{
            setBalance(Balance-spent);
          }
          addExpenseToList(newExp.id,note,spent);
        return;
      }
    }
  }

  function addExpenseToList(id,note,spent){
    let newExp = {
      id: id,
      note: note,
      spent: spent
    }
    setExpensesList([...ExpensesList,newExp]);
  }

  function delExpense(id) {
    const updatedList = ExpensesList.filter((exp) => exp.id !== id);
    setExpensesList(updatedList);
  }

  function nuclearDel(){
    setBalance(0);
    setExpensesList([]);
    localStorage.setItem("Balance",0);
    localStorage.setItem("ExpensesList",[]);
  }

  useEffect(() =>
  {
    localStorage.setItem("ExpensesList",JSON.stringify(ExpensesList))
  },[ExpensesList])

  // useEffect(() => 
  // {
  //   localStorage.setItem("Balance",JSON.stringify(Balance))
  // },[Balance])

  return(
    <>
      <h1>Balance : {Balance}</h1>
      <Form
        updateIncome = {updateIncome}
        addExpense = {addExpense}
        nuclearDel = {nuclearDel}
      />
      <ExpenseList
        ExpensesList = {ExpensesList}
        delExpense = {delExpense}
      />
    </>
  )
}

export default App;