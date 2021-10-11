import React, { useState, useEffect } from "react";
import Form from "./Form";
import { commerce } from "../../../lib/commerce";
import { useForm, FormProvider } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import { useCheckout } from "../../../contexts/checkoutcontext";

const AddressForm = () => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();
    const { handleSubmit } = methods;
    const { checkoutToken, next } = useCheckout()

    const Countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }));
    const Subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }));
    const Shippingoptions = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` }))

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries);
    };
    
    const fetchShippingSubdivisions = async (countrycode) => {
        const { subdivisions } =await commerce.services.localeListSubdivisions(countrycode);
        setShippingSubdivisions(subdivisions);
    }

    const fetchShippingOptions = async (checkoutTokenId, country, province = null) => {
        const option = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: province });
        setShippingOptions(option);
    }

    useEffect(()=>{
        fetchShippingCountries(checkoutToken.id);
    }, [])

    useEffect(()=>{
        if(shippingCountry)
            fetchShippingSubdivisions(shippingCountry);
    }, [shippingCountry])

    useEffect(()=>{
        if(shippingSubdivision)
            fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision])

    useEffect(()=>{
        console.log(shippingOption);
        console.log(Shippingoptions);
    }, [shippingOption])

    return(
        <FormProvider {...methods}>
        <form onSubmit={handleSubmit((data) => next({ data, shippingCountry, shippingSubdivision, shippingOption }))}>
            <div className="row">
                <Form />
            </div>
            <br /><br />
            <div className="row select-row">
                <select className="form-select country-select col-sm-6" aria-label="Default select example" value={shippingCountry} onChange={(e)=>setShippingCountry(e.target.value)}>
                    <option selected>Choose Shipping Country</option>
                    {Countries.map((country) => (
                        <option key={country.id} value={country.id}>{country.label}</option>  /*here giving value={country.id} cuz the id is gonna give us the subdivisions*/
                    ))}
                </select>
                <select className="form-select country-select col-sm-6" aria-label="Default select example" value={shippingSubdivision} onChange={(e)=>setShippingSubdivision(e.target.value)}>
                    <option selected>Choose Shipping Subdivision</option>
                    {Subdivisions.map((subdivision) => (
                        <option key={subdivision.id} value={subdivision.id}>{subdivision.label}</option>  /*here giving value={country.id} cuz the id is gonna give us the subdivisions*/
                    ))}
                </select>
            </div>
            <br /><br />
            <div className="row select-row1">
                <select className="form-select option-select shipping col-sm-6" aria-label="Default select example" value={shippingOption} onChange={(e)=>setShippingOption(e.target.value)}>
                    <option selected>Choose Shipping Option</option>
                    {Shippingoptions.map((item) => (
                        <option key={item.id} value={item.id}>{item.label}</option>  /*is value=item.label right?*//*here giving value={country.id} cuz the id is gonna give us the subdivisions*/
                    ))}
                </select>
            </div> 
            <br /><br />
            <div className="address-buttons">
            <NavLink to="/cart"><button className="btn btn-outline-secondary">Return to Cart</button></NavLink>
            <button class="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
        </FormProvider>
    );
}

export default AddressForm;