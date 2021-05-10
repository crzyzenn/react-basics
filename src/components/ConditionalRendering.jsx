import React from "react";
import Button from "./Button";
import Card from "./Card";

// Authenticated user
const auth = {
  isLoggedIn: false,
  user: {
    name: "Admin User",
    email: "admin@gmail.com",
  },
};

// Unauthenticated user
// const auth = {
//   isLoggedIn: false,
//   user: null
// };

export default function ConditionalRendering() {
  return (
    <div>
      {auth.isLoggedIn ? (
        <Card>
          <div>
            <h1>Welcome User.</h1>
            <p>This is a description</p>
            <Button text="Go to dashboard" color="yellow" />
          </div>
        </Card>
      ) : (
        <Card>
          <div>
            <h1>Not logged in.</h1>
            <p>Please log in to continue</p>
            <Button text="Login" />
          </div>
        </Card>
      )}
    </div>
  );
}
