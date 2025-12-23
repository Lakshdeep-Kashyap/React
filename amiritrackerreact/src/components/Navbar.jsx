import { NavLink } from "react-router-dom"
import "../css/Navbar.css"

function Navbar(){
    return(
        <nav>
            <NavLink to="/" end>Dashboard</NavLink>
            <NavLink to="/charts">Charts</NavLink>
            <NavLink to="/calendar">Calendar</NavLink>
        </nav>
    )
}

export default Navbar