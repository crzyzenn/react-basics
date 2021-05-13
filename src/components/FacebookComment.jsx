import React from "react";

// Build a facebook comment component..
// Should be re-usable
export default function FacebookComment({
  image,
  name,
  comment,
  company,
  commentTime,
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#ddd",
        padding: "10px 10px",
        marginBottom: 15,
      }}
    >
      <img
        style={{
          width: 100,
          height: 65,
          objectFit: "cover",
          marginRight: 20,
        }}
        src={image}
        alt="Profile"
      />
      <div>
        <h3 style={{ margin: 0 }}>
          {name} - {company}
        </h3>
        <p style={{ margin: 0 }}>{comment}</p>
        <div>
          <a href="#" style={{ marginRight: 10 }}>
            Like
          </a>
          <a href="#" style={{ marginRight: 10 }}>
            Reply
          </a>
          {commentTime}
        </div>
      </div>
    </div>
  );
}
