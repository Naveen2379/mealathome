import React, {useEffect, useState} from "react";
import ItemQuantity from "../ItemQuantity";
import ItemNameQuantityManipulation from "../ItemNameQuantityManipulation";

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

    const show_menu = <div>
        {breakfastMenu.map( (item) => {
            return (
                <ItemQuantity key={item.name} itemName={item.name} handleItemQuantity={handleItemQuantity} />
            )
        })}
    </div>;

    return (
        <div>
            <h2>Showing Menu for Breakfast</h2>
            <div>{show_menu}</div>
            <button onClick={submitChosenMenu}>I'm Done</button>
        </div>
    )
}

export default BreakfastMenu;