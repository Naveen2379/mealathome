import React, {useEffect, useState} from "react";
import '../styles/MealHome.css';
import BreakfastCheckBox from "./Breakfast";
import LunchCheckBox from "./Lunch";
import DinnerCheckBox from "./Dinner";


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
            <div className='header-meal-types'>
                <h5>Choose Meal for</h5>
                <div className='meal-types'>
                    <BreakfastCheckBox showBreakfast={showOnlyBreakfast} handleBreakfast={handleBreakfast} />
                    <LunchCheckBox showLunch={showOnlyLunch} handleLunch={handleLunch} />
                    <DinnerCheckBox showDinner={showOnlyDinner} handleDinner={handleDinner} />
                </div>
            </div>
    )
}

export default MealHome;