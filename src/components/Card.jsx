import React from "react";

// Children accepts JSX data passed inside the component
// <Card><p>JSX data....</p></Card>
export default function Card({ width = "100%", children }) {
  return (
    <div
      style={{ padding: 20, border: "1px solid #ddd", marginBottom: 20, width }}
    >
      {children}
    </div>
  );
}
