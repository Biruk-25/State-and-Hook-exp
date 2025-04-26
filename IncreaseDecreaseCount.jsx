// Question on React Hooks
// 3. Create a functional component called "IncreaseDecreaseCount.js''. There
// will be three buttons; a button to increase, a button to decrease, and a
// button to reset the click count values, and you will need to implement the
// useState() Hook to update the clicks.
// Hint:
// Right above the buttons, there will be a count displayer with an initial
// click value of 0. When the increase button is clicked, the value
// increases by one, when the decrease button is clicked, the value will
// decrease by one and when a button to reset is clicked, the value resets
// to the initial value, which is 0. Whenever any button is clicked, the
// change in the click value will be displayed on the count displayer.
// ** Watch this demo clip for question 3, which shows how your app should
// look. **

// import React, { useState } from "react";

// function IncreaseDecreaseCount() {
// let [count, setCount] = useState(0);

// let increase = () => setCount(count + 1);
// let decrease = () => setCount(count - 1);
// let reset = () => setCount(0);

// return (
//     <div>
//     <h2>Count: {count}</h2>
//     <button onClick={increase}>Increase</button>
//     <button onClick={decrease}>Decrease</button>
//     <button onClick={reset}>Reset</button>
//     </div>
// );
// }

// export default IncreaseDecreaseCount;




import React, { useState } from 'react';
import '../index.css';


let IncreaseDecreaseCount = () => {
let [count, setCount] = useState(0);

let handleIncrease = () => setCount((prev) => prev + 1);
let handleDecrease = () => setCount((prev) => prev - 1);
let handleReset = () => setCount(0);

return (
    <div className="counter-container">
    <h1 className="counter-title">🧮 Click Counter</h1>
    <div className="counter-display">Count: {count}</div>
    <div className="button-group">
        <button className="counter-button" onClick={handleIncrease}>➕ Increase</button>
        <button className="counter-button" onClick={handleDecrease}>➖ Decrease</button>
        <button className="reset-button" onClick={handleReset}>🔁 Reset
        </button>
    </div>
    </div>
);
};

export default IncreaseDecreaseCount;
