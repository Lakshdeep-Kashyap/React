

function Expense({id,spent,note,category,delExpense}){
    return(
        <>
            <h2>{spent}</h2>
            <p>{note}</p>
            <p>{category}</p>
            <button onClick={()=>{delExpense(id)}}>delete</button>
        </>
    )
}

export default Expense