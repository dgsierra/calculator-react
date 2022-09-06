/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculatordiv">
        <input type="number" className="calcresult" />
        <div className="row1 calculatorrow">
          <button type="submit" className="graybtn">AC</button>
          <button type="submit" className="graybtn">+/-</button>
          <button type="submit" className="graybtn">%</button>
          <button type="submit" className="orangebtn">÷</button>
        </div>
        <div className="row2 calculatorrow">
          <button type="submit" className="graybtn">7</button>
          <button type="submit" className="graybtn">8</button>
          <button type="submit" className="graybtn">9</button>
          <button type="submit" className="orangebtn">X</button>
        </div>
        <div className="row3 calculatorrow">
          <button type="submit" className="graybtn">4</button>
          <button type="submit" className="graybtn">5</button>
          <button type="submit" className="graybtn">6</button>
          <button type="submit" className="orangebtn">-</button>
        </div>
        <div className="row4 calculatorrow">
          <button type="submit" className="graybtn">1</button>
          <button type="submit" className="graybtn">2</button>
          <button type="submit" className="graybtn">3</button>
          <button type="submit" className="orangebtn">+</button>
        </div>
        <div className="row5 calculatorrow">
          <button type="submit" id="cero" className="graybtn">0</button>
          <button type="submit" className="graybtn">.</button>
          <button type="submit" className="orangebtn">=</button>
        </div>
      </div>
    );
  }
}
