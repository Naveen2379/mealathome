import React, {useEffect, useState} from "react";
import Quantity from "../Quantity/Quantity";

function DinnerMenu() {

    const [lunchMenu, setLunchMenu] = useState([]);
    //const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        /*fetch('endpoint')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setBreakfastMenu(result);
            })*/
        const lunchMenu = [
            {"name": "Lunch"},
            {"name": "Biryani, curd rice", "price": 120},
            {"name": "Ridge gourd gravy, carrot beans poriyal", "price": 150},
            {"name": "Dal fry, cauliflower sabji", "price": 200},
            {"name": "Sambar, rasam", "price": 110},
            {"name": "Gobi paratha, Jeera rice", "price": 100},
            {"name": "Veg rice bowl", "price": 90},
            {"name": "veg biriyani", "price": 80}
        ];
        setLunchMenu(lunchMenu);

    }, []);

    const submitChosenMenu = () => {
    }

    const show_menu = <div>
        {lunchMenu.map( (item) => {
            return (
                <div key={item.name}>
                    <h5>{item.name}</h5>
                    <Quantity item={item.name} />
                </div>
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

export default DinnerMenu;