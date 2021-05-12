import React from "react";

// Color is a default prop
export default function Button({
  text,
  onClick = () => {},
  color = "gray",
  type = "",
}) {
  // // Default params in function
  // const sum = (a, b = 2) => {
  //   return a * b;
  // };

  // console.log(sum(5, 2));

  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, padding: "5px 20px", borderRadius: 25 }}
      type={type}
    >
      {text}
    </button>
  );
}
