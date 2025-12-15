import Expense from "./Expense";
import useToggler from "./hooks/useToggle";

function ExpenseList({ExpensesList,delExpense}){

    const [show,toggle] = useToggler(true);
    return(
        <>
        <button onClick={toggle}>TOGGLE</button>
        {show && (
            <ol>
                {ExpensesList.map((exp) => (
                    <li key={exp.id}>
                        <Expense
                            id = {exp.id}
                            note = {exp.note}
                            spent = {exp.spent}
                            delExpense = {delExpense}
                        />
                    </li>
                ))}
            </ol>
        )}
        </>
    )
}

export default ExpenseList;