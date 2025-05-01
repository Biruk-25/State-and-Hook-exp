// import React, { useReducer, useContext, createContext } from 'react';

// // Step 1: Create a Context
// const CounterContext = createContext();

// // Step 2: Define the initial state and reducer
// const initialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     case 'RESET':
//       return { count: 0 };
//     default:
//       return state;
//   }
// };

// // Step 3: Provider Component with useReducer
// const CounterProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <CounterContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CounterContext.Provider>
//   );
// };

// // Step 4: Consumer Components
// const CounterDisplay = () => {
//   const { state } = useContext(CounterContext);
//   return <h2>Count: {state.count}</h2>;
// };

// const CounterControls = () => {
//   const { dispatch } = useContext(CounterContext);
//   return (
//     <div>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//       <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
//     </div>
//   );
// };

// // Step 5: Main App
// const App = () => {
//   return (
//     <CounterProvider>
//       <h1>Counter App</h1>
//       <CounterDisplay />
//       <CounterControls />
//     </CounterProvider>
//   );
// };

// export default App;