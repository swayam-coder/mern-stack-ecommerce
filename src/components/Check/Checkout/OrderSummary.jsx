import React from "react";
import { useCheckout } from "../../../contexts/checkoutcontext";

const OrderSummary = () => {
    const { checkoutToken } = useCheckout()
    return(
        <>
        <ol class="list-group list-group-numbered">
            {checkoutToken.live.line_items.map((product) => (
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">{product.name}</div>
                        Quantity: {product.quantity}
                    </div>
                    <div class="ms-2">{product.line_total.formatted_with_symbol}</div>
                </li>
           ))}
            
        </ol>
        <br />
        <li className="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-bold">Total</div>
                    {checkoutToken.live.subtotal.formatted_with_symbol}
                </div>
        </li>
        </>
    );
}

export default OrderSummary;