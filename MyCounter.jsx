// Questions on React State 1. Create a class component called "MyCounter.js" that depends on another class component, "CounterDisplayer.js". "MyCounter.js" keeps track of the click count value in the state, and this is where you initialize your state, which holds the click counts. Create a function named "allClicksCounter()" in "MyCounter.js" that will update or increase your state by one anytime the button in the "MyCounter.js" component is clicked. Hint: ● The primary function of "CounterDisplayer.js" is to show how many times the button in the "MyCounter.js" component has been clicked. That is, you need to use props to pass the updated click data from "MyCounter.js" to "CounterDisplayer.js". ● Display the number of clicks exactly below the button.

// import React, { Component } from "react";
// import CounterDisplayer from "./CounterDisplayer.jsx";

// class MyCounter extends Component {
//   constructor() {
//     super();
//     this.state = { count: 0 };
//   }

//   allClicksCounter = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };

//   render() {
//     return (
//       <div style={styles.container}>
//         <button style={styles.button} onClick={this.allClicksCounter}>
//           Click Me
//         </button>
//         <CounterDisplayer count={this.state.count} />
//       </div>
//     );
//   }
// }

// let styles = {
//   container: {
//     textAlign: "center",
//     marginTop: "60px",
//   },
//   button: {
//     padding: "12px 24px",
//     fontSize: "1rem",
//     backgroundColor: "#4caf50",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     cursor: "pointer",
//   },
// };

// export default MyCounter;


// 2. Create another class component called "EvenCounterDisplayer.js", on
// which the “MyCounter.js” component depends. This component keeps
// track of and displays ONLY the number of even click counts when the
// button inside “MyCounter.js” is clicked.
// Hint:
// ● When the button is clicked for the ﬁrst time, your
// "EvenCounterDisplayer.js" component should display "Clicked 0
// times". However, when the button is clicked for the second time,
// "Clicked 2 times" should appear. When the button is clicked for the
// third time, it should show "Clicked 2 times". When clicked the fourth
// time, it should show "Clicked 4 times" and so forth.
// ● Display the “EvenCounterDisplayer.js” component directly below the
// "CounterDisplayer.js" component so that you can see both counters
// together.
// Watch this demo clip for questions 1 and 2, which shows how your app
// should look.



// import React, { Component } from "react";
// import CounterDisplayer from "./CounterDisplayer.jsx";
// import EvenCounterDisplayer from "./EvenCounterDisplayer.jsx";

// class MyCounter extends Component {
//   letructor() {
//     super();
//     this.state = { count: 0 };
//   }

//   allClicksCounter = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   };

//   render() {
//     let evenCount = this.state.count % 2 === 0 ? this.state.count : this.state.count - 1;

//     return (
//       <div>
//         <button onClick={this.allClicksCounter}>Click Me</button>
//         <CounterDisplayer count={this.state.count} />
//         <EvenCounterDisplayer evenCount={evenCount} />
//       </div>
//     );
//   }
// }

// export default MyCounter;


import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer.jsx";
import EvenCounterDisplayer from "./EvenCounterDisplayer.jsx";

class MyCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  allClicksCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div style={styles.container}>
        <button style={styles.button} onClick={this.allClicksCounter}>
          Click Me
        </button>
        <CounterDisplayer count={this.state.count} />
        <EvenCounterDisplayer count={this.state.count} />
      </div>
    );
  }
}

let styles = {
  container: {
    textAlign: "center",
    marginTop: "60px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1rem",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default MyCounter;
