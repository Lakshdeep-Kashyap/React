import {Routes,Route} from "react-router-dom"

import Dashboard from "../pages/Dashboard"
import HandleExpenses from "../pages/HandleExpenses"
import Calendar from "../pages/Calendar"

import "../css/MidPanel.css"

function MidPanel({alltransactions,setAllTransactions}){
    return(
        <main className="mid">
            <Routes>
                <Route path="/" element={
                    <Dashboard 
                        alltransactions={alltransactions}
                    />}/>
                <Route path="/handleexpenses" element={
                    <HandleExpenses 
                        setAllTransactions={setAllTransactions}
                    />}/>
                <Route path="/calendar" element={<Calendar/>}/>
            </Routes>
        </main>
    )
}

export default MidPanel