import React, {useState} from "react";
import Quantity from "../Quantity/Quantity";

function DinnerItem({itemName}) {

    const [quantity, setItemQuantity] = useState( 0);

    const handleItemNameQuantity = (quantityType) => {
        console.log('clicked itemName ', itemName);
        console.log('quantityType ', quantityType);
        if(quantityType === 'INCREASE') {
            setItemQuantity(quantity+1);
        }
        else {
            setItemQuantity(quantity-1);
        }
    }

    return (
        <div>
            <h5>{itemName}</h5>
            <Quantity handleQuantity={handleItemNameQuantity} quantity={quantity} />
        </div>
    )
}

export default DinnerItem;