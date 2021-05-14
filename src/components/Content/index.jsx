import React from "react";
import "./content.css";

export default function index({ children }) {
  return <div className="content--parent">{children}</div>;
}
