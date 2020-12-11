import React, {useEffect, useState} from "react";
import '../styles/MealHome.css';
import BreakfastMeal from "./Breakfast/BreakfastMeal";
import LunchMeal from "./Lunch/LunchMeal";
import DinnerMeal from "./Dinner/DinnerMeal";


function MealHome() {

    const [[showOnlyBreakfast, showOnlyLunch, showOnlyDinner], setMeal] = useState([false, false, false]);

    const handleBreakfast = () => {
        console.log('...Breakfast...');
        if(showOnlyBreakfast) {
            setMeal([false, false, false]);
        }
        else {
            setMeal([true, false, false]);
        }
    }
    const handleLunch = () => {
        console.log('...Lunch...');
        if(showOnlyLunch) {
            setMeal([false, false, false]);
        }
        else {
            setMeal([false, true, false]);
        }
    }
    const handleDinner = () => {
        console.log('...Dinner...');
        if(showOnlyDinner) {
            setMeal([false, false, false]);
        }
        else {
            setMeal([false, false, true]);
        }
    }

    /*useEffect( () => {
        console.log('showOnlyBreakfast ', showOnlyBreakfast);
        console.log('showOnlyLunch ', showOnlyLunch);
        console.log('showOnlyDinner ', showOnlyDinner);
    }, [showOnlyBreakfast, showOnlyLunch, showOnlyDinner]);*/

    return (
            <div className='meal-types'>
                <h5>Choose Meal for</h5>
                <BreakfastMeal showBreakfast={showOnlyBreakfast} handleBreakfast={handleBreakfast} />
                <LunchMeal showLunch={showOnlyLunch} handleLunch={handleLunch} />
                <DinnerMeal showDinner={showOnlyDinner} handleDinner={handleDinner} />
            </div>
    )
}

export default MealHome;