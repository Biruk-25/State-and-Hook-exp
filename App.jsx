// Question 1&2

// import React from "react";
// import MyCounter from "./components/MyCounter.jsx";
// import CounterDisplayer from "./components/CounterDisplayer.jsx";

// function App() {
// return (
//     <div className="App">
//     <MyCounter />
    
//     </div>
// );
// }

// export default App;



// Question 3&4


// import React from 'react';
// import IncreaseDecreaseCount from './components/IncreaseDecreaseCount';
// import UseEffectForTitle from './components/UseEffectForTitle';

// function App() {
// return (
//     <div className="App">
//     <IncreaseDecreaseCount />
//     {/* <UseEffectForTitle /> */}
//     </div>
// );
// }

// export default App;

import React from 'react';
import MyCounter from './Components/MyCounter';
import IncreaseDecreaseCount from './Components/IncreaseDecreaseCount';
import UseEffectForTitle from './Components/UseEffectForTitle';
// import Reducer from './components/UseRe'
// import UseContext from './components/UseContext';
// import UseReducer from './components/UseReducer'

function App() {
  return (
    <>
      <h1> React States and Hooks Practice</h1>

      <h2>Question 1 & 2</h2>
      <MyCounter />

      <h2>Question 3</h2>
      <IncreaseDecreaseCount />
      
      <h2>Question 4</h2>
      <UseEffectForTitle />
      {/* <Reducer/>
      <UseContext/>
      <UseReducer/> */}
    </>
  );
}

export default App;
