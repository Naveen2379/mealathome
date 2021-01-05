import React, {useEffect, useState} from "react";
import ItemQuantity from "../ItemQuantity";
import ItemNameQuantityManipulation from "../ItemNameQuantityManipulation";
import Timings from "../Timings";
import {Breakfast} from "../../constants";
import '../../styles/menu.css';

function BreakfastMenu() {

    const [breakfastMenu, setBreakfastMenu] = useState([]);
    const [itemQuantityArr, setItemQuantityArr] = useState([{itemName:'', quantity:0}]);

    useEffect(() => {
        /*fetch('endpoint')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setBreakfastMenu(result);
            })*/
        const breakfastMenu = [
            {"name": "bread upma", "price": 120 },
            {"name": "podi idli", "price": 120 },
            {"name": "sabudana kichidi", "price": 120 },
            {"name": "poha", "price": 120 },
            {"name": "rava idli", "price": 120},
            {"name": "poori", "price": 120},
            {"name": "rava dosa", "price": 120},
            {"name": "idli", "price": 120},
            {"name": "dosa", "price": 120},
            {"name": "pesarattu", "price": 120},
            {"name": "vada", "price": 120}
        ]
        setBreakfastMenu(breakfastMenu);

    }, []);

    const handleItemQuantity = (selectedItemName, selectedQuantity) => {
        const itemQuantityArr_New = ItemNameQuantityManipulation(itemQuantityArr, selectedItemName, selectedQuantity)
        setItemQuantityArr(itemQuantityArr_New);
    }

    const submitChosenMenu = () => {
        console.log(itemQuantityArr.filter((item) => item.itemName!==''));
    }

    const show_menu = <div className='menu'>
        {breakfastMenu.map( (item) => {
            return (
                <ItemQuantity key={item.name} itemName={item.name} handleItemQuantity={handleItemQuantity} />
            )
        })}
    </div>;

    return (
        <div className='timing-menu'>
            <Timings mealType={Breakfast} />
            {show_menu}
            <button onClick={submitChosenMenu}>I'm Done</button>
        </div>
    )
}

export default BreakfastMenu;