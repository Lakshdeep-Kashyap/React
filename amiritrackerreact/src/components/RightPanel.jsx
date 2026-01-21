import ExpensesList from "./ExpensesList"

import "../css/RightPanel.css"

function RightPanel({alltransactions,setAllTransactions}){
    
    function delExpense(id){
        const newarr = alltransactions.filter((exp) => (exp.id !== id))
        setAllTransactions(newarr)
    }
    return(
        <aside className="right">
            <ExpensesList
                alltransactions={alltransactions}
                delExpense={delExpense}
            />
        </aside>
    )
}

export default RightPanel