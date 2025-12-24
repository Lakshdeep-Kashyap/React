import Navbar from "./Navbar"

import "../css/LeftPanel.css"

function LeftPanel({balance}){
    return(
        <aside className="left">
            <div className="balance">${balance}</div>
            <Navbar/>
        </aside>
    )
}

export default LeftPanel