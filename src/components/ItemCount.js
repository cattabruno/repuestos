import React, { useState } from "react";

class ItemCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    if (this.state.count >= 10) {
      this.setState({
        count: 10,
      });
    } else {
      this.setState({
        count: this.state.count + 1,
      });
    }
  }

  decrement() {
    if (this.state.count <= 0) {
      this.setState({
        count: 0,
      });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }

  render() {
    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Agregar
        </button>
        <button className="dec" onClick={this.decrement}>
          Quitar
        </button>
        <h1>Contador: {this.state.count}</h1>
      </div>
    );
  }
}

export default ItemCount;
