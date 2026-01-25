import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "../css/Navbar.css"

function Navbar(){
    return(
        <nav>
            <NavLink to="/" end><FontAwesomeIcon icon="fa-solid fa-house-user"/> Dashboard</NavLink>         
            <NavLink to="/handleexpenses"><FontAwesomeIcon icon="fa-solid fa-chart-pie"/> Expenses</NavLink>
            <NavLink to="/calendar"><FontAwesomeIcon icon="fa-solid fa-calendar"/> Calendar</NavLink>
            {/*NavLink works simillar to <a href=""> but doesnt reload the page*/}
        </nav>
    )
}

export default Navbar