import React, {useEffect, useState} from "react";
import Quantity from "../Quantity/Quantity";

function BreakfastMenu() {

    const [breakfastMenu, setBreakfastMenu] = useState([]);
    //const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        /*fetch('endpoint')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setBreakfastMenu(result);
            })*/
        const breakfastMenu = [
            {"name": "Breakfast"},
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


    const submitChosenMenu = () => {
    }

    const show_menu = <div>
        {breakfastMenu.map( (item) => {
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
            <h2>Showing Menu for Breakfast</h2>
            <div>{show_menu}</div>
            <button onClick={submitChosenMenu}>I'm Done</button>
        </div>
    )
}

export default BreakfastMenu;