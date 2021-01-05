import React, {useState} from "react";
import {Breakfast, Dinner, Lunch} from "../../constants";

const timings = {
    Breakfast: ['7:30am-8:30am', '8:30am-9:30am', '9:30am-10:30am'],
    Lunch: ['12:30pm-1:30pm', '1:30pm-2:30am'],
    Dinner: ['7:00am-8:00pm', '8:00pm-9:30pm']
}

function Timings({mealType}) {

    const [timing, saveTimings] = useState('');
    const saveThisTime = (event) => {
        console.log(event.target.value);
        saveTimings(timing);
    }

    const showTimings = (mealType) => {
        switch (mealType) {
            case Breakfast: {
                const breakfast = ['7:30am-8:30am', '8:30am-9:30am', '9:30am-10:30am'];
                return (
                    <div>
                        {
                            breakfast.map( (timing) => {
                                return (
                                    <button onClick={saveThisTime}>
                                        {timing}
                                    </button>
                                )
                            })
                        }
                        <a href={''}>I'm here</a>
                    </div>
                )
            }

            case Lunch: {
                const lunch = ['12:30pm-1:30pm', '1:30pm-2:30am'];
                return (
                    <div>
                        {
                            lunch.map( (timing) => {
                                return (
                                    <button onClick={saveThisTime}>
                                        {timing}
                                    </button>
                                )
                            })
                        }
                        <a href={''}>I'm here</a>
                    </div>
                )
            }
            case Dinner: {
                const dinner = ['7:00am-8:00pm', '8:00pm-9:30pm'];
                return (
                    <div>
                            {
                                dinner.map((timing) => {
                                    return (
                                        <button onClick={saveThisTime}>
                                            {timing}
                                        </button>
                                    )
                                })
                            }
                            <a href={''}>I'm here</a>
                    </div>
                )
            }
            default:
                return '';
        }
    }

    return (
        <div>
            {
                showTimings(mealType)
            }
        </div>
    )
}

export default Timings;