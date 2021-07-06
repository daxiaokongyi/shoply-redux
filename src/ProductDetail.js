import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import CartButtons from './CartButtons';
import './ProductDetail.css';

const ProductDetail = () => {
    const {id} = useParams();    
    const {name, price, description, image_url} = useSelector(state => ({...state.products[id]}));

    return (
        <div className="row justify-content-center">
            <div className="col-md-4">
                <img
                    className="ProductDetails-img card-img-top"
                    src={image_url} 
                    alt={name} />
                <div className="card-body">
                    <div className="d-flex justify-content-between mr-3">
                        <div>{name}</div>
                        <div>${price}</div>
                    </div>
                    <p><small>{description}</small></p>
                    <CartButtons id={id}/>
                </div>
                <Link to="/" className="btn btn-block btn-link">Back to Homepage</Link>
            </div>
        </div>
    )
}

export default ProductDetail;