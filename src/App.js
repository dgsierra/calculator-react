import React from 'react';
import './App.css';
import Calculator from './Components/Calculator';
import Navbar from './Components/Navbar';
import Calculator2 from './Components/Calculator2';

function App() {
  return (
    <div>
      <Navbar />
      <Calculator />
      <Calculator2 />
    </div>
  );
}

export default App;
