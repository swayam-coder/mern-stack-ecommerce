import React from "react";
import OrderSummary from "./OrderSummary";
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useCommerce } from "../../../contexts/commercejs-functions";
import { useCheckout } from "../../../contexts/checkoutcontext";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const PaymentForm = () => {
    const { handleCaptureCheckout } = useCommerce()
    const { checkoutToken, userData, prevStep, nextStep } = useCheckout()

    const handleSubmit = async (event, elements, stripe) => {
        event.preventDefault();  // doesnt let the page refresh on submit

        if (!stripe || !elements) return;
    
        const cardElement = elements.getElement(CardElement);
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });
    
        if (error) {
          console.log('[error]', error);
        } else {
          const orderData = {
            line_items: checkoutToken.live.line_items,
            customer: { firstname: userData.data.firstname, lastname: userData.data.lastname, email: userData.data.email },
            shipping: { name: 'International', street: userData.data.address, town_city: userData.data.city, county_state: userData.shippingSubdivision, postal_zip_code: userData.data.pin, country: userData.shippingCountry },
            fulfillment: { shipping_method: userData.shippingOption },
            payment: {
              gateway: 'stripe',
              stripe: {
                payment_method_id: paymentMethod.id,
              },
            }, 
          };  /*here remember that the fields to the left should have the exact same name as given above like "town_city" cant be replaced 
              by "town-city" or "city" or "townCity" or any other name*/
          handleCaptureCheckout(checkoutToken.id, orderData);
          nextStep();
        }
    };

return (
    <>
        <OrderSummary checkoutToken={checkoutToken}/>
        <br />
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
            <div class="fw-bold">Payment</div>
            <br />
            <Elements stripe={stripePromise}>
              <ElementsConsumer>{({ elements, stripe }) => (
                <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                    <CardElement />
                      <br /> <br />
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className="btn btn-outline-secondary" type="button" onClick={prevStep}>Back</button>
                          <button className="btn btn-outline-secondary" type="submit" disabled={!stripe}>
                              Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                          </button>
                      </div>
                </form>
              )}
              </ElementsConsumer>
            </Elements>
            </div>
        </li>
    </>
);
}

export default PaymentForm;