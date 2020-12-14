import React from "react";
import '../../styles/MealType.css';
import {Lunch} from "../../constants";
import LunchMenu from "../LunchMenu";

function LunchCheckBox({showLunch, handleLunch}) {

    const handleLunchMenu = () => {
        console.log('handleLunchMenu');
        handleLunch();
    }

    return (
        <div className='meal-type'>
            <label>{Lunch}
                <input type="checkbox"
                       onChange={handleLunchMenu}
                       value={Lunch}
                       checked={showLunch} />
            </label>
            <div>
                {
                    showLunch ? <LunchMenu /> : ''
                }
            </div>
        </div>
    )
}

export default LunchCheckBox;