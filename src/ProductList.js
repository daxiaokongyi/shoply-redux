import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import CartButtons from './CartButtons';

const ProductList = () => {
    const products = useSelector(state => state.products);

    const productCards = Object.keys(products).map(
        id => (
            <div className="col-md-3 mb-3" key={id}>
                <div className="card">
                    <div className="card-body">
                        <h2 className="card-title text-center">
                            <Link to={`/products/${id}`}>{products[id].name}</Link>
                        </h2>
                        <CartButtons id={id}/>                        
                    </div>
                </div>
            </div>
        )
    ) 

    return (
        <div>
            <div className="row">
                {productCards}
            </div>
        </div>
    )
}

export default ProductList;