import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage";

function App() {
    const selectMealFor = ['Breakfast', 'Lunch', 'Dinner'];
  return (
    <div className="App">
      <HomePage selectMealFor={selectMealFor} />
    </div>
  );
}

export default App;
