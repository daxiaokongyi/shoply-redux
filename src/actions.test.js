import { addToCart, removeFromCart, applyDiscount } from './actions';
import {ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT} from './actionType';

it('test for adding to cart', () => {
    expect(addToCart(1)).toEqual({
        type: ADD_TO_CART,
        payload: {
            id:1
        }
    })
})

it('test for removing from cart', () => {
    expect(removeFromCart(1)).toEqual({
        type: REMOVE_FROM_CART,
        payload: {
            id:1
        }
    })
})

it('test for applying discount', () => {
    expect(applyDiscount(0.2)).toEqual({
        type: APPLY_DISCOUNT,
        payload: {
            discount:0.2
        }
    })
})
