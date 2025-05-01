// // Components/UseEffectForTitle.js
// import React, { useState, useEffect } from "react";

// let UseEffectForTitle = () => {
//   let [count, setCount] = useState(0);

//   useEffect(() => {
//     // ComponentDidMount
//     alert("Component is mounted");
//   }, []);

//   useEffect(() => {
//     document.title = `Clicked ${count} times`;
//   }, [count]);

//   let handleClick = () => setCount((prev) => prev + 1);

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <button onClick={handleClick}>Click me</button>
//       <h2>Click Count: {count}</h2>
//     </div>
//   );
// };

// export default UseEffectForTitle;


import React, { useState, useEffect } from "react";
import "../App.css";

let UseEffectForTitle = () => {
  let [count, setCount] = useState(0);
   

  useEffect(() => {
    count === 0
      ? alert("🎉 Component is mounted")
      : (document.title = `Clicked ${count} times`);
  }, [count]);

  // useEffect(() => {
  //   if (count === 0) {
  //     alert("🎉 Component is mounted");
  //   } else {
  //     document.title = `Clicked ${count} times`;
  //   }
  // }, [count]);

  return (
    <div className="effect-container">
      <h1 className="effect-title">📢 useEffect Title Updater</h1>
      <button
        className="effect-button"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click me!
      </button>
      <h2 className="effect-count">You've clicked {count} times</h2>
    </div>
  );
};

export default UseEffectForTitle;


