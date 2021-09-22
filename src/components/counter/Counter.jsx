import React, { Component } from "react";
import './Counter.css'

export default class Counter extends Component {
  state = {
    number: this.props.initialValue || 0,
    step: this.props.initialStep || 1,
  };

  increment = () => {
    this.setState({ number: this.state.number + this.state.step });
  };

  decrement = () => {
    this.setState({ number: this.state.number - this.state.step });
  };

  setStep = (evento) => {
    this.setState({ step: +evento.target.value });
  };

  render() {
    return (
      <div className="Counter">
        <h2>Counter</h2>
        <h3>{this.state.number}</h3>
        <div>
          <label htmlFor="passoInput">Step: </label>
          <input
            id="passo"
            type="number"
            value={this.state.step}
            onChange={this.setStep}
          />
        </div>
        <button onClick={this.increment}>+</button>
        <button onClick={_ => this.decrement()}>-</button>
      </div>
    );
  }
}
