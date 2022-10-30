import { useReducer } from "react";

export const FallBackError = ({ error }) => {
  return (
    <>
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </>
  );
};

// const initialTodos = [
//   {
//     id: 1,
//     title: "Todo 1",
//     complete: false,
//   },
//   {
//     id: 2,
//     title: "Todo 2",
//     complete: false,
//   },
// ];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "COMPLETE":
//       return state.map((todo) => {
//         if (todo.id === action.id) {
//           return { ...todo, complete: !todo.complete };
//         } else {
//           return todo;
//         }
//       });

//     case "DELETE":
//       const inum = state.findIndex((todo) => todo.id === action.id);
//       state.splice(inum, 1);

//       return state;
//     default:
//       return state;
//   }
// };

// export const Todos = () => {
//   /**use Reducer Takes In a reducer function and an Initial State
//    * useReducer returns current or modified state and a dispatch function
//    * the dispatch takes in the actions [type, payload...etc]
//    * state is being modified from the reducer function
//    */
//   const [todos, dispatch] = useReducer(reducer, initialTodos);

//   const handleComplete = (todo) => {
//     dispatch({ type: "COMPLETE", id: todo.id });
//   };

//   const deleteFunc = (todo) => {
//     dispatch({ type: "DELETE", id: todo.id });
//   };

//   console.log(todos);
//   return (
//     <>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <label>
//             <input type="checkbox" checked={todo.complete} onChange={() => handleComplete(todo)} />
//             {todo.title}
//           </label>
//           <br />
//           <button onClick={() => deleteFunc(todo)}>delete</button>
//         </div>
//       ))}
//     </>
//   );
// };
