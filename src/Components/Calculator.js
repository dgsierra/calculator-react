import React, { Component } from 'react'

export default class Calculator extends Component {
  render() {
    return (
      <div>
        <input type="number" className="calcresult"></input>
        <div className="row1">
            <button className="graybtn">AC</button>
            <button className="graybtn">+/-</button>
            <button className="graybtn">%</button>
            <button className="orangebtn">÷</button>
        </div>
        <div className="row2">
            <button className="graybtn">7</button>
            <button className="graybtn">8</button>
            <button className="graybtn">9</button>
            <button className="orangebtn">X</button>
        </div>
        <div className="row3">
            <button className="graybtn">4</button>
            <button className="graybtn">5</button>
            <button className="graybtn">6</button>
            <button className="orangebtn">-</button>
        </div>
        <div className="row4">
            <button className="graybtn">1</button>
            <button className="graybtn">2</button>
            <button className="graybtn">3</button>
            <button className="orangebtn">+</button>
        </div>
        <div className="row5">
            <button className="graybtn">0</button>
            <button className="graybtn">.</button>
            <button className="orangebtn">=</button>
        </div>
      </div>
    )
  }
}
