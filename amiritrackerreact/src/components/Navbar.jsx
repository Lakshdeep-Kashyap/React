import { Link } from "react-router-dom"

function Navbar(){
    return(
        <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/charts">Charts</Link>
            <Link to="/calendar">Calendar</Link>
        </nav>
    )
}

export default Navbar