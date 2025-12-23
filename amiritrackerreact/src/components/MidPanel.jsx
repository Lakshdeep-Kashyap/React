import {Routes,Route} from "react-router-dom"

import Dashboard from "../pages/Dashboard"
import Charts from "../pages/Charts"
import Calendar from "../pages/Calendar"

import "../css/MidPanel.css"

function MidPanel(){
    return(
        <main className="mid">
            <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="/charts" element={<Charts/>}></Route>
                <Route path="/calendar" element={<Calendar/>}></Route>
            </Routes>
        </main>
    )
}

export default MidPanel