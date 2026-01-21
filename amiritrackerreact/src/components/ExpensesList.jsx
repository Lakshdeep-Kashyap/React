import Expense from "../components/Expense.jsx"

function ExpensesList({alltransactions,delExpense}){
    return(
        <>
            <ol>
                {alltransactions.map((exp)=>(
                    (exp.type==="expense"?(
                        <li key={exp.id}>
                            <Expense
                                id={exp.id}
                                amount={exp.amount}
                                note={exp.note}
                                category={exp.category}
                                delExpense={delExpense}
                            />
                        </li>
                    ): null)
                ))}
            </ol>
        </>
    )
}

export default ExpensesList