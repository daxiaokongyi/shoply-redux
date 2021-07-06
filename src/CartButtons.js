import React from 'react';
import './CartButtons.css';
import {useDispatch} from "react-redux";
import { addToCart, removeFromCart } from './actions'; 

const CartButtons = ({id}) => {
    const dispatch = useDispatch();
    // create callbacks with dispatch with type and payload 
    const addItem = () => dispatch(addToCart(id));
    const removeItem = () => dispatch(removeFromCart(id));

    return (
        <div className="d-flex justify-content-between">
            <i
                onClick={addItem}
                className="CartIcon fas fa-cart-plus fa-2x text-success"
            />
            <i 
                onClick={removeItem}
                className="CartIcon fas fa-cart-arrow-down fa-2x text-danger"
            />
        </div>
    )
}

export default CartButtons;