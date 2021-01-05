import React from "react";
import '../../styles/MealType.css';
import {Breakfast, Lunch} from "../../constants";
import LunchMenu from "../LunchMenu";

function LunchCheckBox({showLunch, handleLunch}) {

    const handleLunchMenu = () => {
        console.log('handleLunchMenu');
        handleLunch();
    }

    return (
        <div className='button-meal-type'>
            {/*<label>{Lunch}
                <input type="checkbox"
                       onChange={handleLunchMenu}
                       value={Lunch}
                       checked={showLunch} />
            </label>*/}
            <button onClick={handleLunchMenu}>
                {Lunch}
            </button>
            <div className='meal-type'>
                {
                    showLunch ? <LunchMenu /> : ''
                }
            </div>
        </div>
    )
}

export default LunchCheckBox;