import React, {useEffect, useState} from "react";

const breakfast = [
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
    ];
const lunch = [
    {"name": "Lunch"},
    {"name": "Biryani, curd rice", "price": 120},
    {"name": "Ridge gourd gravy, carrot beans poriyal", "price": 150},
    {"name": "Dal fry, cauliflower sabji", "price": 200},
    {"name": "Sambar, rasam", "price": 110},
    {"name": "Gobi paratha, Jeera rice", "price": 100},
    {"name": "Veg rice bowl", "price": 90},
    {"name": "veg biriyani", "price": 80}
    ];
const dinner = [
    {"name": "Dinner"},
    {"name": "Lemon Chicken", "price": 150},
    {"name": "Chettinad Fish Fry", "price": 250},
    {"name": "Dum Aalu Lakhnawi", "price": 100},
    {"name": "Keema biriyani", "price": 90},
    {"name": "Dal Makhani", "price": 70}
    ];

function MealMenu({mealSelectedFor}) {

    const [menu, setMenu] = useState([]);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        console.log(mealSelectedFor);
        const selectedMealType = mealSelectedFor;
        if(selectedMealType === 'BREAKFAST') {
            setMenu(breakfast);
        }
        else if(selectedMealType === 'LUNCH') {
            setMenu(lunch);
        }
        else {
            setMenu(dinner);
        }
    }, [mealSelectedFor]);

    const increaseQuantiity = () => {
        setQuantity(quantity+1);
    }
    const decreaseQuantiity = () => {
        setQuantity(quantity-1);
    }
    const submitChosenMenu = () => {


    }
    const show_menu = <div>
        {menu.map( (item) => {
        return (
            <div key={item.name}>
                <h5>{item.name}</h5>
                {/*<div>
                    <button onClick={decreaseQuantiity}><b>-</b></button>
                    <span>Quantity {quantity}</span>
                    <button onClick={increaseQuantiity}><b>+</b></button>
                </div>*/}

            </div>
        )
    })}
    </div>;

    return (
        <div>
            <h2>Showing Menu for {mealSelectedFor}</h2>
            <div>{show_menu}</div>
            <button onClick={submitChosenMenu}>I'm Done</button>
        </div>
    )
}

export default MealMenu;