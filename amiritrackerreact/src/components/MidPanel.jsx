import {Routes,Route} from "react-router-dom"

import Dashboard from "../pages/Dashboard"
import Charts from "../pages/Charts"
import Calendar from "../pages/Calendar"

import "../css/MidPanel.css"

function MidPanel({alltransactions,setAllTransactions}){
    return(
        <main className="mid">
            <Routes>
                <Route path="/" element={
                    <Dashboard
                        alltransactions={alltransactions}
                        setAllTransactions={setAllTransactions}
                    />
                }/>
                <Route path="/charts" element={<Charts/>}/>
                <Route path="/calendar" element={<Calendar/>}/>
            </Routes>
        </main>
    )
}

export default MidPanel