import App from "./App"
import CheckoutProvider from "./contexts/checkoutcontext"
import CommerceProvider  from "./contexts/commercejs-functions"

export default function Main() {
    return (
        <>
            <CommerceProvider>
                <CheckoutProvider>
                    <App />
                </CheckoutProvider>
            </CommerceProvider>
        </>
    )
    
}