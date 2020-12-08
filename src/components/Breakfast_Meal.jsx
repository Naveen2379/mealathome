import React, {useState} from "react";
import MealMenu from "./MealMenu";
import '../styles/MealType.css';

const Breakfast = 'BREAKFAST';

function Breakfast_Meal() {

    const [selectedBreakfast, setBreakfast] = useState('');
    const handleBreakfast = (event) => {
        const selectedMealFor = event.target.value;
        if(selectedBreakfast !== selectedMealFor) {
            setBreakfast(selectedMealFor);
        }
        else {
            setBreakfast('');
        }
    }
    return (
        <div className='meal-type'>
            <label>{Breakfast}
                <input type="checkbox"
                       onChange={handleBreakfast}
                       value={Breakfast}
                       checked={selectedBreakfast === Breakfast} />
            </label>
            <div>
                {selectedBreakfast ? <MealMenu mealSelectedFor={selectedBreakfast} /> : ''}
            </div>
        </div>
    )
}

export default Breakfast_Meal;