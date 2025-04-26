// src/Components/CounterDisplayer.jsx
import React, { Component } from "react";

class CounterDisplayer extends Component {
  render() {
    return (
      <h2 style={{ color: "#333", marginTop: "20px" }}>
        Total Clicks: {this.props.count}
      </h2>
    );
  }
}

export default CounterDisplayer;
