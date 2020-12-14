import React, {useEffect, useState} from "react";
import ItemQuantity from "../ItemQuantity";
import {Lunch} from "../../constants";
import ItemNameQuantityManipulation from "../ItemNameQuantityManipulation";

function LunchMenu() {

    const [lunchMenu, setLunchMenu] = useState([]);
    const [itemQuantityArr, setItemQuantityArr] = useState([{itemName:'', quantity:0}]);
    useEffect(() => {
        /*fetch('endpoint')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setBreakfastMenu(result);
            })*/
        const lunchMenu = [
            {"name": "Biryani, curd rice", "price": 120},
            {"name": "Ridge gourd gravy, carrot beans poriyal", "price": 150},
            {"name": "Dal fry, cauliflower sabji", "price": 200},
            {"name": "Sambar, rasam", "price": 110},
            {"name": "Gobi paratha, Jeera rice", "price": 100},
            {"name": "Veg rice bowl", "price": 90},
            {"name": "veg biriyani", "price": 80}
        ];
        setLunchMenu(lunchMenu);
    }, [itemQuantityArr]);

    const handleItemQuantity = (selectedItemName, selectedQuantity) => {
        const itemQuantityArr_New = ItemNameQuantityManipulation(itemQuantityArr, selectedItemName, selectedQuantity)
        setItemQuantityArr(itemQuantityArr_New);
    }

    const submitChosenMenu = () => {
        console.log(itemQuantityArr.filter((item) => item.itemName!==''));
        /*
        fetch('url', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: {
                "mealType": Lunch,
                "selectedItems": itemQuantityArr
            }
        });
        */
    }

    const show_menu = <div>
        {lunchMenu.map( (item) => {
            return (
                <ItemQuantity key={item.name} itemName={item.name} handleItemQuantity={handleItemQuantity} />
            )
        })}
    </div>;

    return (
        <div>
            <h2>Showing Menu for Lunch</h2>
            <div>{show_menu}</div>
            <button onClick={submitChosenMenu}>I'm Done</button>
        </div>
    )
}

export default LunchMenu;