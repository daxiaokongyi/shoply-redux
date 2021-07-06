import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import CartButtons from './CartButtons';
import {applyDiscount} from './actions';
import { calculateTotal } from './helpers';

const Cart = () => {
    const [discount, setDiscount] = useState("");

    const dispatch = useDispatch();

    const {products, cartItems, discountApplied, cartValue, discountAmount, } = useSelector(state => state);

    const handleChange = evt => {
        setDiscount(evt.target.value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(applyDiscount(discount));
    }

    const renderTable = () => {
        const itemRows = Object.keys(cartItems).map(
            id => (
                <tr key={id}>
                    <td className="text-center align-middle">
                        <Link to={`/products/${id}`}>{products[id].name}</Link>
                    </td>
                    <td className="align-middle">
                        {products[id].description}
                    </td>
                    <td className="text-center align-middle">
                        {products[id].price}
                    </td>
                    <td className="text-center align-middle">
                        {cartItems[id]}
                    </td>
                    <td className="text-center align-middle">
                        <CartButtons id={id}/>    
                    </td>
                </tr>
            )            
        )

        return (
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Item Description</th>
                        <th>Item Price</th>
                        <th>Item Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {itemRows}
                </tbody>
            </table>
        )
    }

    return cartItems.length === 0 ? (
        <p>No items in the cart yet</p>
    ) : (
        <div>
            {renderTable()}
            <div>
                Total You Pay: ${cartValue}
                {discountApplied ? (
                    <div>
                        <span className="text-success">
                            {`- You saved $${(discountAmount * calculateTotal(products, cartItems)).toFixed(2)} (${(discountAmount * 100).toFixed(0)}%)`}
                        </span> 
                        <p><small style={{color:"red"}}>{`Your discount with REMOVE${discountAmount * 100} was already used`}</small></p>
                    </div>
                    ) : null
                }
            </div>
            <form onSubmit={handleSubmit} >
                <label htmlFor="discount">Discount: <small>(You may apply REMOVE10/20/30)</small></label>
                <input 
                    id="discount"
                    name="discount"
                    type="text" 
                    onChange={handleChange}
                    value={discount}
                    className="form-control ml-2 mr-2"
                />
                {
                    discountApplied 
                        ? <button className="btn btn-primary" disabled={true}>Apply Discount</button>
                        : <button className="btn btn-primary">Apply Discount</button>
                }
            </form>
        </div>
    )
}

export default Cart;