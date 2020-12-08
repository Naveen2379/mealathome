import React, {useState} from "react";
import '../styles/MealHome.css';
import MealMenu from "./MealMenu";
import Breakfast_Meal from "./Breakfast_Meal";
import Lunch_Meal from "./Lunch_Meal";
import Dinner_Meal from "./Dinner_Meal";


function MealHome() {

    return (
            <div className='meal-types'>
                <h5>Choose Meal for</h5>
                <Breakfast_Meal />
                <Lunch_Meal />
                <Dinner_Meal />
            </div>
    )
}

export default MealHome;