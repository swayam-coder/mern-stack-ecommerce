import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import ConfirmationForm from "./ConfirmationForm";
import { commerce } from "../../../lib/commerce";
import { useCommerce } from '../../../contexts/commercejs-functions';
import { useCheckout } from '../../../contexts/checkoutcontext';

const steps = ["Shipping Address" , "Payment Details", "Confirmation Page"];

const Checkout = () => {
    const { cart } = useCommerce()
    const {
        activeStep,
        checkoutToken,
        setCheckoutToken,
        userData,
    } = useCheckout()

    const classes = useStyles();

    useEffect(() => {
        if (cart.id) {
            const generateToken = async () => {
                try {
                    const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                    setCheckoutToken(token);
                } catch {
                    
                }
            };
            generateToken();
        }
    }, []);

    console.log(userData);

    const Form = () => {
        return(
            (activeStep===0) ? 
            <AddressForm /> : 
            <PaymentForm />
        );
    }

    return (
        <>
            <main className={classes.main}>
                <Paper className={classes.paper} >
                    <Typography variant="h4" align="centre">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep===((steps.length)-1) ? <ConfirmationForm /> : checkoutToken && <Form />}
                </Paper>
            </main>
            <div>
                <h5 className="note">Dont worry...we dont share user information with anyone else 😊</h5>
            </div>
        </>
    );
}

export default Checkout;