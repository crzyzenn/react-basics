import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

// Create registration form
// On Submit -> console log the form data
// Validate the form for false inputs

// Fields Required*
// First Name
// Last Name
// Email
// Address
// Password
// Confirm Password

const Error = ({ error }) => (
  <p style={{ color: "red", fontSize: "0.5rem" }}>{error}</p>
);

export default function Register() {
  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if fields are not empty
    for (let key in formData) {
      if (!formData[key] && key !== "address") {
        setErrors((prevState) => ({
          ...prevState,
          [key]: `${key} is required`,
        }));
      }
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors((prevState) => ({
        ...prevState,
        confirmPassword: "Password & confirm password does not match.",
      }));
    }

    // If all fields are ok
    if (
      formData.firstName &&
      formData.password &&
      formData.confirmPassword &&
      formData.email &&
      formData.lastName &&
      formData.password === formData.confirmPassword
    ) {
      console.log("Form submission data ", formData);
    }
  };

  return (
    <>
      <h2>Registration</h2>
      <form onSubmit={handleFormSubmit}>
        <Input
          onChange={(e) => {
            setErrors({ ...errors, firstName: "" });
            setFormData({ ...formData, firstName: e.target.value });
          }}
          placeHolderKeyword="first name"
          label="First name"
        />
        <Error error={errors.firstName} />

        <Input
          onChange={(e) => {
            setErrors({ ...errors, lastName: "" });
            setFormData({ ...formData, lastName: e.target.value });
          }}
          placeHolderKeyword="last name"
          label="Last name"
        />
        <Error error={errors.lastName} />

        <Input
          onChange={(e) => {
            setErrors({ ...errors, email: "" });
            setFormData({ ...formData, email: e.target.value });
          }}
          placeHolderKeyword="email"
          type="email"
          label="Email"
        />
        <Error error={errors.email} />

        <Input
          onChange={(e) => {
            setFormData({ ...formData, address: e.target.value });
          }}
          placeHolderKeyword="address"
          label="Address"
        />
        <br />

        <Input
          onChange={(e) => {
            setErrors({ ...errors, password: "" });
            setFormData({ ...formData, password: e.target.value });
          }}
          placeHolderKeyword="password"
          type="password"
          label="Password"
        />
        <Error error={errors.password} />

        <Input
          onChange={(e) => {
            setErrors({ ...errors, confirmPassword: "" });
            setFormData({ ...formData, confirmPassword: e.target.value });
          }}
          placeHolderKeyword="confirm password"
          type="password"
          label="Confirm Password"
        />
        <Error error={errors.confirmPassword} />

        <Button type="submit" text="Register" color="white" />
      </form>
    </>
  );
}
