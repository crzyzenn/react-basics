import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate user data before submission
    if (!email) setErrors({ ...errors, email: "Email field is required!" });
    if (!password)
      setErrors({ ...errors, password: "Password field is required!" });

    // If data is validated, send data for submission
    if (email && password) {
      console.log("Data for form submission ", { email, password });
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <Input
          onChange={(e) => {
            // Set Email and remove errors if any
            setEmail(e.target.value);
            setErrors({ ...errors, email: "" });
          }}
          placeHolderKeyword="email"
          type="email"
          label="Your Email"
        />
        {/* If any errors in email display them */}
        <p style={{ color: "red", marginBottom: 20 }}>
          {errors.email && errors.email}
        </p>

        <Input
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors({ ...errors, password: "" });
          }}
          placeHolderKeyword="password"
          type="password"
          label="Password"
        />
        {/* If any errors in password display them */}
        <p style={{ color: "red", marginBottom: 20 }}>
          {errors.password && errors.password}
        </p>

        {/* Submit button */}
        <Button text="Login" color="white" type="submit" />
      </form>
    </div>
  );
}
