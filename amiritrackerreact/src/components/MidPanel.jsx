import {Routes,Route} from "react-router-dom"

import Dashboard from "../pages/Dashboard"
import HandleExpenses from "../pages/HandleExpenses"
import Calendar from "../pages/Calendar"

import "../css/MidPanel.css"

function MidPanel({setAllTransactions}){
    return(
        <main className="mid">
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
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