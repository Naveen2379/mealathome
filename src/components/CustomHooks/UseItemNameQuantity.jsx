/*
import {useState} from "react";

function useItemNameQuantity(props) {
    const [itemQuantityArr, setItemQuantityArr] = useState([{itemName:'', quantity:0}]);
    const [selectedItemName, selectedQuantity] = props;

    const name = itemQuantityArr.find((item) => item.itemName===selectedItemName);

    if(name) {
        const itemIndex = itemQuantityArr.findIndex(item =>  item.itemName===selectedItemName);
        const newArr = [...itemQuantityArr];
        newArr[itemIndex] = {...newArr[itemIndex], quantity: selectedQuantity};
        setItemQuantityArr(newArr)
    }
    else {
        itemQuantityArr.push({itemName: selectedItemName, quantity: selectedQuantity});
        setItemQuantityArr(itemQuantityArr);
    }

    return itemQuantityArr;
}

export default useItemNameQuantity;

*/
