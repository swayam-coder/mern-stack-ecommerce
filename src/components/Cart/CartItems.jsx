import React from "react";
import { useCommerce } from "../../contexts/commercejs-functions"

const CartItems = ({item}) => {
    const { handleRemoveFromCart, handleUpdateCartQty } = useCommerce()
    return(
        <>
        <div className="col">
            <div className="card shadow-sm">
                <div className="imageContainer">
                    <img src={item.media.source} className="image mx-auto" alt="productImage"></img>
                </div>

                <div className="card-body cart-card">
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: item.name }} />  {/*if we dont add dangerouslySetInnerHTML={{ __html: product.description }} and make <p> a self closing tag then it will return <p>your description</p> */}
                </div>

                {/* <span>Quantity</span> */}

                <div className="cart-quant">
                    <div className="item-quantity">
                        <button type="button" className="btn btn-sm btn-outline-secondary quantbtn cart-inc" onClick={()=>{handleUpdateCartQty(item.id, item.quantity+1)}}>+</button> {/*can we use pre or post increment or decrement operators*/}
                        <small>{item.quantity}</small>
                        <button type="button" className="btn btn-sm btn-outline-secondary quantbtn cart-dec" onClick={()=>{handleUpdateCartQty(item.id, item.quantity-1)}}>-</button>
                    </div>
                    <button type="button" class="btn btn-sm btn-danger" style={{width: '25%', }} onClick={()=>{handleRemoveFromCart(item.id)}}>Remove</button>
                </div>
                
            </div>
        </div>
        </>
        )
}

export default CartItems;