/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick2 = (e) => {
      e.preventDefault();
      const data = e.target.value;
      const result = calculate(this.state, data);
      this.setState(result);
      console.log(result);
    };
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculatordiv">
        <div id="operation">
          <div className="calcresult">
            {next}
            {total}
          </div>
          <div className="symbol">{operation}</div>
        </div>
        <div className="row1 calculatorrow">
          <button value="AC" onClick={this.handleClick2} type="submit" className="graybtn">AC</button>
          <button value="+/-" onClick={this.handleClick2} type="submit" className="graybtn">+/-</button>
          <button value="%" onClick={this.handleClick2} type="submit" className="graybtn">%</button>
          <button value="÷" onClick={this.handleClick2} type="submit" className="orangebtn">÷</button>
        </div>
        <div className="row2 calculatorrow">
          <button value={7} onClick={this.handleClick2} type="submit" className="graybtn">7</button>
          <button value={8} onClick={this.handleClick2} type="submit" className="graybtn">8</button>
          <button value={9} onClick={this.handleClick2} type="submit" className="graybtn">9</button>
          <button value="x" onClick={this.handleClick2} type="submit" className="orangebtn">X</button>
        </div>
        <div className="row3 calculatorrow">
          <button value={4} onClick={this.handleClick2} type="submit" className="graybtn">4</button>
          <button value={5} onClick={this.handleClick2} type="submit" className="graybtn">5</button>
          <button value={6} onClick={this.handleClick2} type="submit" className="graybtn">6</button>
          <button value="-" onClick={this.handleClick2} type="submit" className="orangebtn">-</button>
        </div>
        <div className="row4 calculatorrow">
          <button value={1} onClick={this.handleClick2} type="submit" className="graybtn">1</button>
          <button value={2} onClick={this.handleClick2} type="submit" className="graybtn">2</button>
          <button value={3} onClick={this.handleClick2} type="submit" className="graybtn">3</button>
          <button value="+" onClick={this.handleClick2} type="submit" className="orangebtn">+</button>
        </div>
        <div className="row5 calculatorrow">
          <button value={0} onClick={this.handleClick2} type="submit" id="cero" className="graybtn">0</button>
          <button value="." onClick={this.handleClick2} type="submit" className="graybtn">.</button>
          <button value="=" onClick={this.handleClick2} type="submit" className="orangebtn">=</button>
        </div>
      </div>
    );
  }
}
