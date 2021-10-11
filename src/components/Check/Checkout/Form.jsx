import React from 'react';
import { useFormContext } from 'react-hook-form';

function Form({ type, name, label, required }) {
  const { register } = useFormContext();

  return (
    <>
    <div className="col-sm-6">
        <label>First name</label>
        <input 
          className="form-control" 
          name="firstName"
          type="text"
          {...register("firstname", {required: true})}
        />
    </div>
    <div className="col-sm-6">
        <label>Last name</label>
        <input 
          className="form-control" 
          name="lastName"
          type="text"
          {...register("lastname", {required: true})}
        />
    </div>
    <div className="col-sm-6">
        <br />
        <label>Address</label>
        <input 
          className="form-control" 
          name="address"
          type="text"
          {...register("address", {required: true})}
        />
    </div>
    <div className="col-sm-6">
        <br />
        <label>Email</label>
        <input 
          className="form-control" 
          name="email"
          type="email"
          {...register("email", {required: true})}
        />
    </div>
    <div className="col-sm-6">
        <br />
        <label>City</label>
        <input 
          className="form-control" 
          name="city"
          type="text"
          {...register("city", {required: true})}
        />
    </div>
    <div className="col-sm-6">
        <br />
        <label>Pin Code</label>
        <input 
          className="form-control" 
          name="pin"
          type="text"
          {...register("pin", {required: true})}
        />
    </div>
    </>
  );
}

export default Form;
