import {Routes,Route} from "react-router-dom"

import LeftPanel from "./components/LeftPanel"
import MidPanel from "./components/MidPanel"
import RightPanel from "./components/RightPanel"

import { useLocalStorage } from "./hooks/useLocalStorage"

import "./css/App.css"
import { useMemo } from "react"
// import { useEffect, useState } from "react"

function App(){
  const [allexpenses,setAllExpenses] = 
      useLocalStorage("allexpensesss",[
          {id:1,spent:1000,note:"Rent",category:"Rent"},
          {id:2,spent:200,note:"Ate-Out",category:"Food"}
      ])
    
  const [balance,setBalance] = useLocalStorage("balanceee",0)

  const left = useMemo(()=>{
    const totalSpent = allexpenses.reduce(
      (sum,exp) => sum + exp.spent , 0
    )
    return balance-Number(totalSpent)
  },[balance,allexpenses])

  return(
    <>
      <div className="applayout">
        <LeftPanel
          balance={left}
        />
        <MidPanel
          setBalance={setBalance}
          allexpenses={allexpenses}
          setAllExpenses={setAllExpenses}
        />
        <RightPanel
          allexpenses={allexpenses}
          setAllExpenses={setAllExpenses}
        />
      </div>
    </>
  )
}

export default App