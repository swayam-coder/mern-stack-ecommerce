import { createContext, useContext, useState } from "react";

const checkoutContext = createContext()

export function useCheckout() {
    return useContext(checkoutContext)
}

export default function CheckoutProvider ({ children }) {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [userData, setUserData] = useState([])

    const nextStep = () => setActiveStep((activeStep) => activeStep + 1);
    const prevStep = () => setActiveStep((activeStep) => activeStep - 1);

    const next = (data) => {
        setUserData(data);
        nextStep();
    }

    const val = {
        activeStep,
        setActiveStep,
        checkoutToken,
        setCheckoutToken,
        userData,
        setUserData,
        nextStep,
        prevStep,
        next
    }

    return <checkoutContext.Provider value={val}>
        {children}
    </checkoutContext.Provider>
}