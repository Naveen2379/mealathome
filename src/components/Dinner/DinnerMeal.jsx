import React from "react";
import '../../styles/MealType.css';
import {Dinner} from "../../constants";
import DinnerMenu from "./DinnerMenu";


function DinnerMeal({showDinner, handleDinner}) {
    const handleDinnerMenu = (event) => {
        console.log('handleDinnerMenu');
        const dinner = event.target.value;
        handleDinner(dinner);
    }

    return (
        <div className='meal-type'>
            <label>{Dinner}
                <input type="checkbox"
                       onChange={handleDinnerMenu}
                       value={Dinner}
                       checked={showDinner} />
            </label>
            <div>
                {
                    showDinner ? <DinnerMenu /> : ''
                }
            </div>
        </div>
    )
}

export default DinnerMeal;