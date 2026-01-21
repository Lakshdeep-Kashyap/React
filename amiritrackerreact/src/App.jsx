import {Routes,Route} from "react-router-dom"

import LeftPanel from "./components/LeftPanel"
import MidPanel from "./components/MidPanel"
import RightPanel from "./components/RightPanel"

import { useLocalStorage } from "./hooks/useLocalStorage"

import "./css/App.css"
// import { useEffect, useState } from "react"

function App(){
  const [alltransactions,setAllTransactions] = 
      useLocalStorage("alltransactionsss",[
          {id:1,spent:1000,note:"Rent",category:"Rent",type:"expense"},
          {id:2,spent:200,note:"Ate-Out",category:"Food",type:"expense"}
      ])
    
  // const [balance,setBalance] = useLocalStorage("balanceee",0)

  // const left = useMemo(()=>{
  //   const totalSpent = alltransactions.reduce(
  //     (sum,exp) => sum + exp.spent , 0
  //   )
  //   if(balance-Number(totalSpent) < 0){
  //     alert ("You have exceeded your balance!")
  //     return 0
  //   }
  //   return balance-Number(totalSpent)
  // },[balance,alltransactions])

  return(
    <>
      <div className="applayout">
        <LeftPanel
          alltransactions={alltransactions}
        />
        <MidPanel
          alltransactions={alltransactions}
          setAllTransactions={setAllTransactions}
        />
        <RightPanel
          alltransactions={alltransactions}
          setAllTransactions={setAllTransactions}
        />
      </div>
    </>
  )
}

export default App