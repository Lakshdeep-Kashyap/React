import Navbar from "./Navbar"

import "../css/LeftPanel.css"

function LeftPanel(){
    return(
        <aside className="left">
            <div className="balance">$123</div>
            <Navbar/>
        </aside>
    )
}

export default LeftPanel