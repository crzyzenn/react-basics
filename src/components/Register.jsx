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

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName) {
      setErrors({ ...errors, firstName: "First Name is Required" });
    }
    if (!formData.lastName) {
      setErrors({ ...errors, lastName: "Last Name is Required" });
    }
    if (!formData.email) {
      setErrors({ ...errors, email: "Email is Required" });
    }
    if (!formData.password) {
      setErrors({ ...errors, password: "Password is Required" });
    }
    if (!formData.confirmPassword) {
      setErrors({
        ...errors,
        confirmPassword: "Password confirmation is Required",
      });
    }

    console.log(formData);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Input
        onChange={(e) => {
          setErrors({ ...errors, firstName: "" });
          setFormData({ ...formData, firstName: e.target.value });
        }}
        placeHolderKeyword="first name"
        label="First name"
      />
      <p style={{ color: "red", marginBottom: 20 }}>
        {errors.firstName && errors.firstName}
      </p>

      <Input
        onChange={(e) => {
          setErrors({ ...errors, lastName: "" });
          setFormData({ ...formData, lastName: e.target.value });
        }}
        placeHolderKeyword="last name"
        label="Last name"
      />
      <p style={{ color: "red", marginBottom: 20 }}>
        {errors.lastName && errors.lastName}
      </p>

      <Input
        onChange={(e) => {
          setErrors({ ...errors, email: "" });
          setFormData({ ...formData, email: e.target.value });
        }}
        placeHolderKeyword="email"
        type="email"
        label="Email"
      />
      <p style={{ color: "red", marginBottom: 20 }}>
        {errors.email && errors.email}
      </p>

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
      <p style={{ color: "red", marginBottom: 20 }}>
        {errors.password && errors.password}
      </p>

      <Input
        onChange={(e) => {
          setErrors({ ...errors, confirmPassword: "" });
          setFormData({ ...formData, confirmPassword: e.target.value });
        }}
        placeHolderKeyword="confirm password"
        label="Confirm Password"
      />
      <p style={{ color: "red", marginBottom: 20 }}>
        {errors.confirmPassword && errors.confirmPassword}
      </p>
      <Button type="submit" text="Register" color="white" />
    </form>
  );
}
