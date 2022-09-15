import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator2 = () => {
  const [count, setCount] = useState({});
  const handleClick = (e) => {
    e.preventDefault();
    const data = e.target.value;
    const result = calculate(count, data);
    setCount(result);
  };
  const current = count.next || count.total || 0;

  return (
    <div className="cointainer2">
      <div className="calculatorsub">
        <div className="calculatordiv">
          <div id="operation">
            <div className="calcresult">
              {current}
            </div>
            <div className="symbol">{count.operation}</div>
          </div>
          <div className="row1 calculatorrow">
            <button value="AC" onClick={handleClick} type="submit" className="graybtn">AC</button>
            <button value="+/-" onClick={handleClick} type="submit" className="graybtn">+/-</button>
            <button value="%" onClick={handleClick} type="submit" className="graybtn">%</button>
            <button value="÷" onClick={handleClick} type="submit" className="orangebtn">÷</button>
          </div>
          <div className="row2 calculatorrow">
            <button value={7} onClick={handleClick} type="submit" className="graybtn">7</button>
            <button value={8} onClick={handleClick} type="submit" className="graybtn">8</button>
            <button value={9} onClick={handleClick} type="submit" className="graybtn">9</button>
            <button value="x" onClick={handleClick} type="submit" className="orangebtn">X</button>
          </div>
          <div className="row3 calculatorrow">
            <button value={4} onClick={handleClick} type="submit" className="graybtn">4</button>
            <button value={5} onClick={handleClick} type="submit" className="graybtn">5</button>
            <button value={6} onClick={handleClick} type="submit" className="graybtn">6</button>
            <button value="-" onClick={handleClick} type="submit" className="orangebtn">-</button>
          </div>
          <div className="row4 calculatorrow">
            <button value={1} onClick={handleClick} type="submit" className="graybtn">1</button>
            <button value={2} onClick={handleClick} type="submit" className="graybtn">2</button>
            <button value={3} onClick={handleClick} type="submit" className="graybtn">3</button>
            <button value="+" onClick={handleClick} type="submit" className="orangebtn">+</button>
          </div>
          <div className="row5 calculatorrow">
            <button value={0} onClick={handleClick} type="submit" id="cero" className="graybtn">0</button>
            <button value="." onClick={handleClick} type="submit" className="graybtn">.</button>
            <button value="=" onClick={handleClick} type="submit" className="orangebtn">=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator2;
