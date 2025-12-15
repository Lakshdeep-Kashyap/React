function Expense({id,note,spent,delExpense}){
    return(
        <>
            <p>{note} - ₹{spent}</p>
            <button onClick={() => {delExpense(id)}}>remove exp</button>
        </>
    )
};

export default Expense;