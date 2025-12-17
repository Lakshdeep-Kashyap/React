// import useLocalStorage from "./hooks/useLocalStorage";

// import Form from "./Form";
// import RenderList from "./RenderList"

// function App(){
//   const [Balance,setBalance] = useLocalStorage("Balance",0);
//   const [ExpensesList,setExpensesList] = useLocalStorage("ExpensesList",[
//     {id:1,spent:69,note:"nth"}
//   ])

//   // function updateIncome(earnt){
//   //   setBalance(prev => prev+earnt)
//   // }

//   function updateIncome(amount) {
//     setBalance(prev => prev + Number(amount));
//   }

//   // function addExpense(s,n){
//   //   if(s !== ""){
//   //     if(n !== ""){
//   //       const newexp = [
//   //         {
//   //           id:Date.now(),
//   //           spent:s,
//   //           note:n
//   //         }
//   //       ]
//   //       setExpensesList(...ExpensesList,newexp);
//   //     }
//   //     else{
//   //       const newexp = [
//   //         {
//   //           id:Date.now(),
//   //           spent:s,
//   //           note:"#"
//   //         }
//   //       ]
//   //       setExpensesList(...ExpensesList,newexp);
//   //     }
//   //   }
//   // }

//   function addExpense(s, n) {
//     if (!s) return;

//     const newExpense = {
//       id: Date.now(),
//       spent: Number(s),
//       note: n || "#"
//     };

//     setExpensesList([...ExpensesList, newExpense]);
//   }


//   return(
//     <>
//       <Form 
//         updateIncome={updateIncome}
//         addExpense={addExpense}
//       />
//       <RenderList
//         ExpensesList={ExpensesList}
//       />
//     </>
//   )
// }

// export default App




import useLocalStorage from "./hooks/useLocalStorage";

import Form from "./Form";
import RenderList from "./RenderList";

function App() {
  const [Balance, setBalance] = useLocalStorage("Balance", 0);

  const [ExpensesList, setExpensesList] = useLocalStorage(
    "ExpensesList",
    [
      { id: 1, spent: 69, note: "nth" },{id: 2, spent: 420, note: "sth else"}
    ]
  );

  function updateIncome(amount) {
    setBalance(prev => prev + Number(amount));
  }

  function addExpense(amount, note) {
    if (!amount) return;

    const newExpense = {
      id: Date.now(),
      spent: Number(amount),
      note: note || "#"
    };

    setExpensesList(prev => [...prev, newExpense]);
  }

  return (
    <>
      <Form 
        updateIncome={updateIncome}
        addExpense={addExpense}
      />

      <h2>Balance: ₹{Balance}</h2>

      <RenderList
        ExpensesList={ExpensesList}
        setExpensesList={setExpensesList}
      />
    </>
  );
}

export default App;
