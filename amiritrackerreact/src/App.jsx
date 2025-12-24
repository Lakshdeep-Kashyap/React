import {Routes,Route} from "react-router-dom"

import LeftPanel from "./components/LeftPanel"
import MidPanel from "./components/MidPanel"
import RightPanel from "./components/RightPanel"

import { useLocalStorage } from "./hooks/useLocalStorage"

import "./css/App.css"

function App(){
  const [allexpenses,setAllExpenses] = 
      useLocalStorage("allexpensesss",[
          {id:1,spent:1000,note:"Rent",category:"Rent"},
          {id:2,spent:200,note:"Ate-Out",category:"Food"}
      ])
    
  const  [balance,setBalance] = useLocalStorage("balanceee",0)

  return(
    <>
      <div className="applayout">
        <LeftPanel
          balance={balance}
        />
        <MidPanel
          setBalance={setBalance}
          allexpenses={allexpenses}
          setAllExpenses={setAllExpenses}
        />
        <RightPanel
          allexpenses={allexpenses}
        />
      </div>
    </>
  )
}

export default App