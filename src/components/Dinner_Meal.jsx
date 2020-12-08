import React, {useState} from "react";
import MealMenu from "./MealMenu";
import '../styles/MealType.css';

const Dinner = 'DINNER';
function Dinner_Meal() {
    const [selectedDinner, setDinner] = useState('');
    const handleDinner = (event) => {
        const selectedMealFor = event.target.value;
        if(selectedDinner !== selectedMealFor) {
            setDinner(selectedMealFor);
        }
        else {
            setDinner('');
        }
    }
    return (
        <div className='meal-type'>
            <label>{Dinner}
                <input type="checkbox"
                       onChange={handleDinner}
                       value={Dinner}
                       checked={selectedDinner === Dinner} />
            </label>
            <div>
                {
                    selectedDinner ? <MealMenu mealSelectedFor={selectedDinner} /> : ''
                }
            </div>
        </div>
    )
}

export default Dinner_Meal;