import React, {useEffect, useState} from "react";
import Quantity from "../Quantity/Quantity";
import {increase} from "../../constants";
import DinnerItem from "../DinnerItem/DinnerItem";

function DinnerMenu() {

    const [dinnerMenu, setDinnerMenu] = useState([]);

    useEffect(() => {
        /*fetch('endpointURL')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setBreakfastMenu(result);
            })*/
        const dinnerMenu = [
            {"name": "Dinner"},
            {"name": "Lemon Chicken", "price": 150},
            {"name": "Chettinad Fish Fry", "price": 250},
            {"name": "Dum Aalu Lakhnawi", "price": 100},
            {"name": "Keema biriyani", "price": 90},
            {"name": "Dal Makhani", "price": 70}
        ];
        setDinnerMenu(dinnerMenu);

    }, []);


    const submitChosenMenu = () => {
    }

    const show_menu = <div>
        {
            dinnerMenu.map( (item) => {
                console.log('item name ', item.name);
                return (
                    <DinnerItem key={item.name} itemName={item.name} />
                )

            })
        }
    </div>;

    return (
        <div>
            <h2>Showing Menu for Dinner</h2>
            <div>{show_menu}</div>
            <button onClick={submitChosenMenu}>I'm Done</button>
        </div>
    )
}

export default DinnerMenu;