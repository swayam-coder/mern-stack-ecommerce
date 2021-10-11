import React from "react";

const EmptyCart = () => {
    return(
        <>
        <div style={{margin: 195}}>
            <h3 style={{position: "relative", textAlign: "center"}}>Your Cart is Empty</h3>
            <p style={{position: "relative", top: 10, textAlign: "center"}}>Your selected products from the store will show up here</p>
        </div>
        </>
        )
}

export default EmptyCart;