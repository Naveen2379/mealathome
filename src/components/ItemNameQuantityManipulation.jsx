function ItemNameQuantityMan(itemQuantityArr, selectedItemName, selectedQuantity) {
    const name = itemQuantityArr.find((item) => item.itemName===selectedItemName);
    if(name) {
        const itemIndex = itemQuantityArr.findIndex(item =>  item.itemName===selectedItemName);
        const newArr = [...itemQuantityArr];
        newArr[itemIndex] = {...newArr[itemIndex], quantity: selectedQuantity};
        return newArr;
    }
    else {
        itemQuantityArr.push({itemName: selectedItemName, quantity: selectedQuantity});
        return itemQuantityArr;
    }
}

export default ItemNameQuantityMan;