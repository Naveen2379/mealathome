import React, {useState} from "react";
import {TimePicker} from 'antd';
import 'antd/dist/antd.css';

const { RangePicker } = TimePicker;
function HomePage (props) {
    const [timeRange, setTimeRange] = useState(['10:00', '11:00']);
    function handleSelectMealFor(meal) {
        console.log('meal checked', meal);
    }

    function handleTimeRange(value, dateString) {
        const timeRange = dateString;
        console.log(timeRange);
        setTimeRange(timeRange);
    }

    const show_selectMealFor = props.selectMealFor.map( (meal) => {
        return (
                <p key={meal}><input type='checkbox' onClick={handleSelectMealFor} />{meal}</p>
        )
    });

    return (
        <div>
            <h1>Meal At Home</h1>
            <div>{show_selectMealFor}</div>
            <div><RangePicker use12Hours format="h:mm:ss A" onChange={handleTimeRange}/></div>
        </div>
    )
}

export default HomePage;