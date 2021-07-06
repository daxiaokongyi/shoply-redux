import data from './data.json';
import {ADD_TO_CART, APPLY_DISCOUNT, REMOVE_FROM_CART} from './actionType';
import {calculateTotal} from './helpers';

const validDiscounts = {
    REMOVE10: 0.1,
    REMOVE20: 0.2,
    REMOVE30: 0.3
}

// set up initial state
const DEFAULT_STATE = {
    products: data.products,
    cartItems: {},
    discountApplied: false,
    discountAmount: 0,
    cartValue: 0.0
}

// create root reducer
const rootReducer = (state=DEFAULT_STATE, action) => {
    const {type, payload} = action;
    console.log(type, payload);

    switch(type){
        case ADD_TO_CART: {
            // record the number of the item
            let itemsCopy = {...state.cartItems}
            itemsCopy[payload.id] = (state.cartItems[payload.id] || 0) + 1;
            return {
                ...state, 
                cartItems: itemsCopy,
                cartValue: calculateTotal(state.products, itemsCopy, state.discountAmount)
            }
        }
        case REMOVE_FROM_CART: {
            let itemsCopy = {...state.cartItems}
            // if the selected item is not in the cart, return 
            console.log(itemsCopy[payload.id]);
            if (!itemsCopy[payload.id]) return state;
            // if the selected item exists, decrease the quantity by one 
            itemsCopy[payload.id] = state.cartItems[payload.id] - 1;
            // if the selected item is none, then remove this item row
            if (itemsCopy[payload.id] === 0) {
                delete itemsCopy[payload.id];
            }
            console.log(itemsCopy);
            return {
                ...state,
                cartItems: itemsCopy,
                cartValue: calculateTotal(state.products, itemsCopy, state.discountAmount)
            }
        }
        case APPLY_DISCOUNT: {
            // make sure discount can only be applied one time
            if(state.discountApplied === false && validDiscounts[payload.discount]){
                console.log(validDiscounts[payload.discount]);

                const discountAmount = validDiscounts[payload.discount];
                const cartValue = calculateTotal(state.products, state.cartItems, discountAmount);

                return {
                    ...state,
                    discountAmount: discountAmount,
                    cartValue: cartValue,
                    discountApplied: true,
                }
            }
            // if no discount applied, return state
            return state;
        }
        default: {
            return state;
        }
    }
}

export default rootReducer;