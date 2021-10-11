import React from "react";
import Emptycart from "./Emptycart";
import FilledCart from "./FilledCart";
import { useCommerce } from "../../contexts/commercejs-functions"

const Cart = () => {
    const { cart } = useCommerce()
    const isEmpty = !cart.total_items;

    if (!cart.line_items) return 'Loading'; /*this is important otherwise on refresh it will show "unable to read formatted_with_symbol of undefined*/

    return (
        <>
        {isEmpty? <Emptycart /> : <FilledCart />}
        </>
    );
}

export default Cart;