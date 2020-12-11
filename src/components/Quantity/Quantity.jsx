import React, {useState} from "react";
import {decrease, increase} from "../../constants";


function Quantity({handleQuantity, quantity}) {

    const setQuantity = (event) => {
        console.log('Quantity function');
        console.log('quantityType ', event.target.value);
        console.log('------------------------');
        handleQuantity(event.target.value);
    }

    return (
        <div>
            <button onClick={setQuantity} value={decrease}>-</button>
            <span>Quantity {quantity}</span>
            <button onClick={setQuantity} value={increase}>+</button>
        </div>
    )
}

export default Quantity;