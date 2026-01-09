import ExpensesList from "./ExpensesList"

import "../css/RightPanel.css"

function RightPanel({allexpenses,setAllExpenses}){
    
    function delExpense(id){
        const newarr = allexpenses.filter((exp) => (exp.id !== id))
        setAllExpenses(newarr)
    }
    return(
        <aside className="right">
            <ExpensesList
                allexpenses={allexpenses}
                delExpense={delExpense}
            />
        </aside>
    )
}

export default RightPanel