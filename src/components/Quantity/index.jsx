import React from "react";
import {decrease, increase} from "../../constants";


function Quantity({handleQuantity, quantity}) {

    const setQuantity = (event) => {
        handleQuantity(event.target.value);
    }

    return (
        <div>
            <button onClick={setQuantity} value={decrease}>-</button>
            <span>Qty {quantity}</span>
            <button onClick={setQuantity} value={increase}>+</button>
        </div>
    )
}

export default Quantity;