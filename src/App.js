import React from "react";
import logo from "./logo.svg";
import "./App.css";
/*import HomePage from "./components/HomePage";*/
import MealHome from "./components/MealHome";

function App() {
    //const selectMealFor = ["Breakfast", "Lunch", "Dinner"];
    return (
        <div className="App">
            {/*<HomePage selectMealFor={selectMealFor} />*/}
            <MealHome />
        </div>
  );
}

export default App;
