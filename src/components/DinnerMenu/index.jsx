import React, {useEffect, useState} from "react";
import ItemQuantity from "../ItemQuantity";
import ItemNameQuantityManipulation from "../ItemNameQuantityManipulation";

function DinnerMenu() {

    const [dinnerMenu, setDinnerMenu] = useState([]);
    const [itemQuantityArr, setItemQuantityArr] = useState([{itemName:'', quantity:0}]);
    useEffect(() => {
        /*fetch('endpointURL')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setBreakfastMenu(result);
            })*/
        const dinnerMenu = [
            {"name": "Lemon Chicken", "price": 150},
            {"name": "Chettinad Fish Fry", "price": 250},
            {"name": "Dum Aalu Lakhnawi", "price": 100},
            {"name": "Keema biriyani", "price": 90},
            {"name": "Dal Makhani", "price": 70}
        ];
        setDinnerMenu(dinnerMenu);

    }, []);

    const handleItemQuantity = (selectedItemName, selectedQuantity) => {
        const itemQuantityArr_New = ItemNameQuantityManipulation(itemQuantityArr, selectedItemName, selectedQuantity)
        setItemQuantityArr(itemQuantityArr_New);
    }

    const submitChosenMenu = () => {
        console.log(itemQuantityArr.filter((item) => item.itemName!==''));
    }

    const show_menu = <div>
        {
            dinnerMenu.map( (item) => {
                return (
                    <ItemQuantity key={item.name} itemName={item.name} handleItemQuantity={handleItemQuantity} />
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