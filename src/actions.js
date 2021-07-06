import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from "./actionType"; 

export const addToCart = id => {
    return {
        type: ADD_TO_CART,
        payload: {
            id:id
        }
    }
}

export const removeFromCart = id => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            id:id
        }
    }
}

export const applyDiscount = discount => {
    return {
        type: APPLY_DISCOUNT,
        payload: {
            discount: discount
        }
    }
}

