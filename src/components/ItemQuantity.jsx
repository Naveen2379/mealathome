import React, {useEffect, useState} from "react";
import Quantity from "./Quantity";

function ItemQuantity({itemName, handleItemQuantity}) {

    const [quantity, setItemQuantityArr] = useState( 0);

    useEffect( () => {
        if(quantity!==0) handleItemQuantity(itemName, quantity);
    }, [quantity]);

    const handleItemNameQuantity = (quantityType) => {
        if(quantityType === 'INCREASE') {
            setItemQuantityArr(quantity+1);
        }
        else {
            setItemQuantityArr(quantity-1);
        }
    }

    return (
        <div>
            <h5>{itemName}</h5>
            <Quantity handleQuantity={handleItemNameQuantity} quantity={quantity} />
        </div>
    )
}

export default ItemQuantity;