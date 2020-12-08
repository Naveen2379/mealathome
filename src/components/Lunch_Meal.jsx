import React, {useState} from "react";
import MealMenu from "./MealMenu";
import '../styles/MealType.css';

const Lunch = 'LUNCH';
function Lunch_Meal() {

    const [selectedLunch, setLunch] = useState('');
    const handleLunch = (event) => {
        const selectedMealFor = event.target.value;
        if(selectedLunch !== selectedMealFor) {
            setLunch(selectedMealFor);
        }
        else {
            setLunch('');
        }
    }
    return (
        <div className='meal-type'>
            <label>{Lunch}
                <input type="checkbox"
                       onChange={handleLunch}
                       value={Lunch}
                       checked={selectedLunch === Lunch} />
            </label>
            <div>
                {
                    selectedLunch ? <MealMenu mealSelectedFor={selectedLunch} /> : ''
                }
            </div>
        </div>
    )
}

export default Lunch_Meal;