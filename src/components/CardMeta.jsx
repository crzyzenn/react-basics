// Define a component
// Can use functions

import React from "react";

export default function CardMeta({ title, content }) {
  return (
    <div
      style={{
        lineHeight: 0.4,
        marginBottom: 20,
      }}
    >
      <span style={{ opacity: 0.5, fontWeight: "bold" }}>{title}</span>
      <h1>{content}</h1>
    </div>
  );
}

// Can use arrow functions
// const CardMeta = ({ title, content }) => (
//   <div
//     style={{
//       lineHeight: 0.4,
//       marginBottom: 20,
//     }}
//   >
//     <span style={{ opacity: 0.5, fontWeight: "bold" }}>{title}</span>
//     <h1>{content}</h1>
//   </div>
// );

// export default CardMeta;
