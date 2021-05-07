import React, { useState } from "react";

// Custom Input Component
// Takes props
export default function Input({ placeHolderKeyword, someProp }) {
  const [name, setName] = useState("");

  // // Input event onChange handler function
  // const handleChange = (e) => {
  //   // let value = e.target.value;
  //   setName(e.target.value);
  // };

  return (
    <div style={{ marginTop: 50 }}>
      {/* Referencing handler to a separate function */}
      {/* <input
        style={{ marginBottom: 20 }}
        type="name"
        placeholder="Enter your name"
        onChange={handleChange}
      /> */}
      {/* Directly writing the event handler */}
      <input
        style={{ marginBottom: 20 }}
        type="name"
        placeholder={`Enter your ${placeHolderKeyword}`}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      {placeHolderKeyword} = {name || "..."}
      <br />
      Our custom property = {someProp}
    </div>
  );
}
