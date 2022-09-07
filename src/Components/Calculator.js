/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import operate from '../logic/operate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = (e) => {
      e.preventDefault();
      console.log(e.target.value);
      // this.setState((state) => calculate(state, e.target.name));
    };
  }

  render() {
    const { total, next, operation } = this.state;
    console.log(total, next, operation);
    console.log(this.state);
    // console.log(this.handleClick)
    console.log(operate(5, 5, 'x'));
    // console.log(calculate({ total: 100, next: 10, operation: 'x' }, 'x'));
    return (
      <div className="calculatordiv">
        <div id="operation">
          <div className="calcresult">
            {total}
            {next}
          </div>
          <div className="symbol">{operation}</div>
        </div>
        <div className="row1 calculatorrow">
          <button value="AC" onClick={this.handleClick} type="submit" className="graybtn">AC</button>
          <button value="+/-" onClick={this.handleClick} type="submit" className="graybtn">+/-</button>
          <button value="%" onClick={this.handleClick} type="submit" className="graybtn">%</button>
          <button value="÷" onClick={this.handleClick} type="submit" className="orangebtn">÷</button>
        </div>
        <div className="row2 calculatorrow">
          <button value={7} onClick={this.handleClick} type="submit" className="graybtn">7</button>
          <button value={8} onClick={this.handleClick} type="submit" className="graybtn">8</button>
          <button value={9} onClick={this.handleClick} type="submit" className="graybtn">9</button>
          <button value="x" onClick={this.handleClick} type="submit" className="orangebtn">X</button>
        </div>
        <div className="row3 calculatorrow">
          <button value={4} onClick={this.handleClick} type="submit" className="graybtn">4</button>
          <button value={5} onClick={this.handleClick} type="submit" className="graybtn">5</button>
          <button value={6} onClick={this.handleClick} type="submit" className="graybtn">6</button>
          <button value="-" onClick={this.handleClick} type="submit" className="orangebtn">-</button>
        </div>
        <div className="row4 calculatorrow">
          <button value={1} onClick={this.handleClick} type="submit" className="graybtn">1</button>
          <button value={2} onClick={this.handleClick} type="submit" className="graybtn">2</button>
          <button value={3} onClick={this.handleClick} type="submit" className="graybtn">3</button>
          <button value="+" onClick={this.handleClick} type="submit" className="orangebtn">+</button>
        </div>
        <div className="row5 calculatorrow">
          <button value={0} onClick={this.handleClick} type="submit" id="cero" className="graybtn">0</button>
          <button value="." onClick={this.handleClick} type="submit" className="graybtn">.</button>
          <button value="=" onClick={this.handleClick} type="submit" className="orangebtn">=</button>
        </div>
      </div>
    );
  }
}
