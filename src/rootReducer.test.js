import { addToCart, removeFromCart, applyDiscount } from './actions';
import {ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT} from './actionType';
import rootReducer from './rootReducer';
import data from './data.json';

it('testing for adding into cart', () => {
    const state = {
        products: data.products,
        cartItems: {},
        discountApplied: false,
        discountAmount: 0,
        cartValue: 0.0
    }

    const action = {
        type: ADD_TO_CART,
        payload: {id:"3fdd689a-02cc-4ae7-903b-f6d2776ff3b9"}
    }
    expect(rootReducer(state, action)).toMatchObject(
        {
            cartItems: {
                "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9": 1
            },
            cartValue: "100.00"
        }
    )    
})

it('testing for removing an existing from cart', () => {
    const state = {
        products: data.products,
        cartItems: {},
        discountApplied: false,
        discountAmount: 0,
        cartValue: 0.0
    }

    let action = {
        type: ADD_TO_CART,
        payload: {id:"3fdd689a-02cc-4ae7-903b-f6d2776ff3b9"}
    }

    expect(rootReducer(state, action)).toMatchObject(
        {
            cartItems: {
                "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9": 1
            },
            cartValue: "100.00"
        }
    )    

    action = {
        type: REMOVE_FROM_CART,
        payload: {id:"3fdd689a-02cc-4ae7-903b-f6d2776ff3b9"}
    }

    expect(rootReducer(state, action)).toMatchObject(
        {
            cartItems: {},
            cartValue: 0
        }
    )
})

it('testing for applying an discount', () => {
    const state = {
        products: data.products,
        cartItems: {},
        discountApplied: false,
        discountAmount: 0.2,
        cartValue: 0.0
    }

    const action = {
        type: ADD_TO_CART,
        payload: {id:"3fdd689a-02cc-4ae7-903b-f6d2776ff3b9"}
    }
    expect(rootReducer(state, action)).toMatchObject(
        {
            cartItems: {
                "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9": 1
            },
            cartValue: "80.00"
        }
    )    
})