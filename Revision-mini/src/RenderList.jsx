// import Expense from "./Expense"

// function RenderList({ExpensesList}){

//     function delExpense(id){
//         ExpensesList = ExpensesList.filter((e) => (e.id !== id))
//     }

//     return(
//         <>
//             <ol>
//                 {ExpensesList.map((exp) => (
//                     <li>
//                         <Expense
//                             key={exp.id}
//                             id={exp.id}
//                             spent={exp.spent}
//                             note={exp.note}
//                             delExpense={delExpense}
//                         />
//                     </li>
//                 ))}
//             </ol>
//         </>
//     )
// }

// export default RenderList







import Expense from "./Expense";

function RenderList({ ExpensesList, setExpensesList }) {

  function delExpense(id) {
    setExpensesList(prev => prev.filter(exp => exp.id !== id));
  }

  return (
    <>
        <ol>
          {ExpensesList.map(exp => (
            <li key={exp.id}>
              <Expense
                id={exp.id}
                note={exp.note}
                spent={exp.spent}
                delExpense={delExpense}
              />
            </li>
          ))}
        </ol>
    </>
  );
}

export default RenderList;