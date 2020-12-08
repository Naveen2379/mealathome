import React, {useState} from "react";
import {TimePicker} from "antd";
import "antd/dist/antd.css";
import {isEmpty} from "lodash";
import "../styles/homepage.css";

const { RangePicker } = TimePicker;
function HomePage (props) {
    const [mealSelectedForBF, setMealSelectedForBF] = useState({breakfastChecked: false, menu: []});
    const [mealSelectedForLunch, setMealSelectedForLunch] = useState({lunchChecked: false, menu: []});
    const [mealSelectedForDinner, setMealSelectedForDinner] = useState({dinnerChecked: false, menu: []});
    const [timeRange, setTimeRange] = useState(["10:00", "11:00"]);

    function handleTimeRange(value, dateString) {
        const timeRange = dateString;
        console.log(timeRange);
        setTimeRange(timeRange);
    }

    function handleBreakfast() {
        console.log("breakfast");
        if(!mealSelectedForBF.breakfastChecked) {
            const breakfast_menu = [
                {"name": "bread upma" },
                {"name": "podi idli" },
                {"name": "sabudana kichidi" },
                {"name": "poha" },
                {"name": "rava idli"},
                {"name": "poori"},
                {"name": "rava dosa"},
                {"name": "idli"},
                {"name": "dosa"},
                {"name": "bread upma"},
                {"name": "pesarattu"},
                {"name": "vada"}
            ];
            setMealSelectedForBF({breakfastChecked: true, menu: breakfast_menu});
            console.log(mealSelectedForBF);
            console.log(mealSelectedForBF.breakfastChecked);
            console.log(mealSelectedForBF.menu.map( (item) => item));
        }
        else {
            setMealSelectedForBF({breakfastChecked: false, menu: []});
            console.log(mealSelectedForBF.breakfastChecked);
        }

    }

    function handleLunch() {
        console.log("lunch");
        if(!mealSelectedForLunch.lunchChecked) {
            console.log(mealSelectedForLunch.lunchChecked);
            const lunch_menu = [
                {"name": "Biryani, curd rice", "price": 120},
                {"item2": "Ridge gourd gravy, carrot beans poriyal", "price": 150},
                {"item3": "Dal fry, cauliflower sabji", "price": 200},
                {"item4": "Sambar, rasam", "price": 110},
                {"item5": "Gobi paratha, Jeera rice", "price": 100},
                {"item6": "Veg rice bowl", "price": 90},
                {"item7": "veg biriyani", "price": 80}
            ];
            setMealSelectedForLunch({lunchChecked: true, menu: lunch_menu});
        }
        else {
            console.log(mealSelectedForLunch.lunchChecked);
            setMealSelectedForLunch({lunchChecked: false, menu: []});
        }
    }

    function handleDinner() {
        console.log("dinner");
        if(!mealSelectedForDinner.dinnerChecked) {
            console.log(mealSelectedForDinner.checked);
            const dinner_menu = [
                {"name": "Lemon Chicken", "price": 150},
                {"item2": "Chettinad Fish Fry", "price": 250},
                {"item3": "Dum Aalu Lakhnawi", "price": 100},
                {"item4": "Keema biriyani", "price": 90},
                {"item5": "Dal Makhani", "price": 70}
            ];
            setMealSelectedForDinner({dinnerChecked: true, menu: dinner_menu});
        }
        else {
            console.log(mealSelectedForDinner);
            setMealSelectedForDinner({dinnerChecked: false, menu: []});
        }
    }

    /*const show_selectMealFor = props.selectMealFor.map( (selectMealFor) => {
        return (
            <div key={selectMealFor}>
                <p><input type="checkbox" name={selectMealFor} checked={mealSelectedFor_Menu.mealSelectedFor===selectMealFor} onClick={handleSelectMealFor} />{selectMealFor}</p>
                {(mealSelectedFor_Menu.mealSelectedFor===selectMealFor) ? "" : mealSelectedFor_Menu.menu.map( (item) => {
                    return <p key={item}>{Object.values(item)}</p>;
                })}
            </div>
        )
    });*/


    return (
        <div>
            <h1>Meal At Home</h1>
            {/*<div className="select-meal-for">{show_selectMealFor}</div>*/}
            <label>
                <input type="checkbox" checked={mealSelectedForBF.breakfastChecked} onChange={handleBreakfast} />
                Breakfast
            </label>
            {mealSelectedForBF.breakfastChecked ? "" : ""}
            <label>
                <input type="checkbox" checked={mealSelectedForLunch.lunchChecked} onChange={handleLunch} />
                Lunch
            </label>
            {mealSelectedForLunch.lunchChecked ? "show_select_meal_for(mealSelectedForLunch.menu)" : ""}
            <label>
                <input type="checkbox" checked={mealSelectedForDinner.dinnerChecked} onChange={handleDinner} />
                Dinner
            </label>
            {mealSelectedForDinner.dinnerChecked ? "show_select_meal_for(mealSelectedForDinner.menu)" : ""}

            <div><RangePicker use12Hours format="h:mm:ss A" onChange={handleTimeRange}/></div>
        </div>
    )
}

export default HomePage;