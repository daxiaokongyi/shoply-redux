// calculate total price

export const calculateTotal = (products, cart, discountAmount = 0) => {
    // total for each item in the cart
    const totalForEach = Object.keys(cart).map(id => {
        return products[id].price * (cart[id] || 0);
    })

    let totalBeforeDiscount = totalForEach.reduce((a,b) => a + b, 0);
    let totalAfterDiscount = totalBeforeDiscount * (1 - discountAmount);
    return totalAfterDiscount.toFixed(2);
}

// calculate the total quantity

export const calculateTotalQuantity = (cart) => {
    // get quantity of each item
    const quantityEachItem = Object.keys(cart).map(
        id => {
            return cart[id];
        }       
    )
    return quantityEachItem.reduce((a,b) => a + b, 0);
}
