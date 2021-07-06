import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Cart from './Cart';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <ProductList />
            </Route>
            <Route path="/products/:id">
                <ProductDetail/>
            </Route>
            <Route path="/cart" >
                <Cart/>
            </Route>
            <Redirect to="/"></Redirect>
        </Switch>
    )    
}

export default Routes;