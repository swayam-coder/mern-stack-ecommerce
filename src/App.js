import React, { useEffect } from "react";
import Products from "./components/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import {Switch, Redirect, Route, BrowserRouter as Router} from "react-router-dom";
import Checkout from "./components/Check/Checkout/Checkout";
import { useCommerce } from "./contexts/commercejs-functions";

const App = () => {
    const { fetchCart, fetchProducts } = useCommerce()

    useEffect(()=>{
        fetchProducts();
        fetchCart();
    }, []);  // if you write console log inside fetchProducts function then it will log an empty array..idk why?

    return (
    <Router>
        <div>
        <Navbar />
        <Switch>
            <Route exact path="/">
                <Products />
            </Route>
            <Route exact path="/cart">
                <Cart />
            </Route>
            <Route exact path="/checkout">
                <Checkout />
            </Route>
            <Redirect to="/"/>
        </Switch>
        <Footer />
        </div>
    </Router>
    );
}

export default App;