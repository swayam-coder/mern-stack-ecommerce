import React from "react";
import CartItems from "./CartItems";
import { NavLink } from 'react-router-dom';
import { useCommerce } from "../../contexts/commercejs-functions";

const FilledCart = () => {
    const { handleEmptyCart, cart } = useCommerce()
    return(
        <>
        <h4 style={{padding: 20, textAlign: "center"}}>Your Cart</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" style={{margin: 50, marginTop: 0}}>
            {cart.line_items && cart.line_items.map((item) => (
                <CartItems
                    item={item}
                />
            ))}
        </div>

        <div className="checkout" style={{display:"flex", justifyContent:"space-between", padding: 40}}>
            <h3>Total Amount: {cart.subtotal.formatted_with_symbol}</h3>
            <div>
                <button className="btn btn-secondary checkoutbtn" onClick={()=>{handleEmptyCart()}}>Empty Cart</button>
                <NavLink to="/checkout"><button className="btn btn-primary">Checkout</button></NavLink>
            </div>
        </div>
        </>
    );
            }
            
export default FilledCart;