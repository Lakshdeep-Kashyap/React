import Expense from "../components/Expense.jsx"

function ExpensesList({allexpenses,delExpense}){
    return(
        <>
            <ol>
                {allexpenses.map((exp)=>(
                    <li key={exp.id}>
                        <Expense
                            id={exp.id}
                            spent={exp.spent}
                            note={exp.note}
                            category={exp.category}
                            delExpense={delExpense}
                        />
                    </li>
                ))}
            </ol>
        </>
    )
}

export default ExpensesList