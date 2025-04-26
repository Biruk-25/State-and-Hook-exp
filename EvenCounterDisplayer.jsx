// src/Components/EvenCounterDisplayer.jsx
import React, { Component } from "react";

class EvenCounterDisplayer extends Component {
  render() {
    return (
      <h3 style={{ color: "#0077b6", marginTop: "10px" }}>
        Even Clicks:{" "}
        {this.props.count % 2 === 0 ? this.props.count : this.props.count - 1}
      </h3>
    );
  }
}

export default EvenCounterDisplayer;
