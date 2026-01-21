

function Expense({id,amount,note,category,delExpense}){
    return(
        <>
            <h2>{amount}</h2>
            <p>{note}</p>
            <p>{category}</p>
            <button onClick={()=>{delExpense(id)}}>delete</button>
        </>
    )
}

export default Expense