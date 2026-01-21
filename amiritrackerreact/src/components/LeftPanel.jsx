import Navbar from "./Navbar"

import "../css/LeftPanel.css"

function LeftPanel({alltransactions}){
    const balance = alltransactions.reduce((acc, e) => {
        return e.type === "income"
            ? acc + e.amount
            : acc - e.amount
        }, 0)

    if(balance<0){alert("Your balance is negative! Please check your expenses.")}
        
    return(
        <aside className="left">
            <div className="balance">
                ${balance}
                <p>Current Balance</p>
            </div>
            <Navbar/>
        </aside>
    )
}

export default LeftPanel