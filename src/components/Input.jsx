import React, { useState } from "react";

// Custom Input Component
// Takes props
// Default prop -> type -> input type text by default.
export default function Input({
  placeHolderKeyword,
  onChange,
  label,
  type = "text",
}) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: "0.8rem",
          opacity: 0.7,
          marginBottom: 5,
        }}
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={`Enter your ${placeHolderKeyword}`}
        onChange={onChange}
      />
    </div>
  );
}
