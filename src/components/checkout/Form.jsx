import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit()}>
        <label>First name</label>
        <input
          type="text"
          placeholder="Write your full name"
          {...register("fullName", {
            required: true,
            validate: (value) => value.length < 3,
          })}
        />
        {errors.fullName && <p>You must write your name.</p>}
        <label>Email</label>
        <input
          type="text"
          placeholder="Write your email"
          {...register("email", {
            required: true,
            pattern: {
              value:
                /*eslint-disable-next-line max-len*/
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
        />
        {errors.email && <p>You must write a valid email.</p>}
        <label>Zip Code</label>
        <input
          type="number"
          placeholder="Digit your ZipCode"
          {...register("postalCode", { maxLength: 8, min: 0, required: true })}
        />
        {errors.postalCode && <p>You must enter a valid ZipCode.</p>}
        <label>Phone Number</label>
        <input
          type="number"
          placeholder="Digit your Phone number"
          {...register("phoneNumber", {
            maxLength: 10,
            minLength: 7,
            required: true,
          })}
        />
        {errors.phoneNumber && <p>You must enter a valid phone number.</p>}
        <label>A special request? Let us know...</label>
        <textarea
          placeholder='"Be aware of the dog! "'
          {...register("notes")}
        />
        <div className="btnActions">
          <button type="submit">Proceed</button>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      </form>
    </div>
  );
};
