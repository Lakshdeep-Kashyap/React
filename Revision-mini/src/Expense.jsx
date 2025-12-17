function Expense({ id, spent, note, delExpense }) {
  return (
    <div>
      <h1>{spent} — {note}</h1>
      <button onClick={() => delExpense(id)}>X</button>
    </div>
  );
}

export default Expense;
