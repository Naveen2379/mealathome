import React from "react";
import '../../styles/MealType.css';
import {Dinner} from "../../constants";
import Index from "../DinnerMenu";


function DinnerCheckBox({showDinner, handleDinner}) {
    const handleDinnerMenu = (event) => {
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
                    showDinner ? <Index /> : ''
                }
            </div>
        </div>
    )
}

export default DinnerCheckBox;