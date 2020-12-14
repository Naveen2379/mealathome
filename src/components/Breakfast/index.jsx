import React from "react";
import '../../styles/MealType.css';
import {Breakfast} from "../../constants";
import BreakfastMenu from "../BreakfastMenu";


function BreakfastCheckBox({showBreakfast, handleBreakfast}) {

    const handleBreakfastMenu = () => {
        handleBreakfast();
    }

    return (
        <div className='meal-type'>
            <label>{Breakfast}
                <input type="checkbox"
                       onChange={handleBreakfastMenu}
                       value={Breakfast}
                       checked={showBreakfast} />
            </label>
            <div>
                {showBreakfast ? <BreakfastMenu /> : ''}
            </div>
        </div>
    )
}

export default BreakfastCheckBox;