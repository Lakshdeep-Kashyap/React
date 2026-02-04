import "../css/TransactionRow.css"

function TransactionRow({txn}){
    return(
        <>
            <div className={`txn-row ${txn.type}`}>
                <div className="txn-left">
                    <span className="txn-category">{txn.category}</span>
                    <p className="txn-note">{txn.note}</p>
                </div>

                <div className="txn-right">
                    <span className="txn-amount">
                    {txn.type === "expense" ? "-" : "+"}₹{txn.amount}
                    </span>
                </div>
            </div>
        </>
    )
}

export default TransactionRow