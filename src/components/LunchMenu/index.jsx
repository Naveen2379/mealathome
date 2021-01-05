import React, {useEffect, useState} from "react";
import ItemQuantity from "../ItemQuantity";
import {Lunch} from "../../constants";
import ItemNameQuantityManipulation from "../ItemNameQuantityManipulation";
import Timings from "../Timings";

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
            {"name": "Ridge gourd gravy", "price": 150},
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

    const show_menu = <div className='menu'>
        {lunchMenu.map( (item) => {
            return (
                <ItemQuantity key={item.name} itemName={item.name} handleItemQuantity={handleItemQuantity} />
            )
        })}
    </div>;

    return (
        <div className='timing-menu'>
            <Timings mealType={Lunch} />
            {show_menu}
            <button onClick={submitChosenMenu}>I'm Done</button>
        </div>
    )
}

export default LunchMenu;