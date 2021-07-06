import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { calculateTotalQuantity } from './helpers';

const Navbar = () => {
    const {cartValue, cartItems} = useSelector(state => state);
    const itemCount = useSelector(state => calculateTotalQuantity(cartItems));
    const itemUnit = itemCount === 1 ? "item" : "items";
    return (
        <nav className="navbar navbar-light bg-info">
            <div className="mx-3">
                <Link to="/" className="navbar-brand text-light">
                    Shoply
                </Link>            
            </div>
            <ul className="navbar-nav flex-row">
                <li className="nav-item pr-3">
                    <div className="nav-link mx-3">
                        <span className="navbar-text text-light">
                            {itemCount} {itemUnit} (${cartValue})
                        </span>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="mx-3">
                        <Link to="/cart" className="nav-link text-light">
                            See Cart
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;