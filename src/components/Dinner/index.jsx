import React from "react";
import '../../styles/MealType.css';
import {Breakfast, Dinner} from "../../constants";
import DinnerMenu from "../DinnerMenu";


function DinnerCheckBox({showDinner, handleDinner}) {
    const handleDinnerMenu = (event) => {
        const dinner = event.target.value;
        handleDinner(dinner);
    }

    return (
        <div className='button-meal-type'>
            {/*<label>{Dinner}
                <input type="checkbox"
                       onChange={handleDinnerMenu}
                       value={Dinner}
                       checked={showDinner} />
            </label>*/}
            <button onClick={handleDinnerMenu}>
                {Dinner}
            </button>
            <div className='meal-type'>
                {
                    showDinner ? <DinnerMenu /> : ''
                }
            </div>
        </div>
    )
}

export default DinnerCheckBox;