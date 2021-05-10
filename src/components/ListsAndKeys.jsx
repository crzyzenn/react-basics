import React from "react";
import Card from "./Card";

import { uuid } from "uuidv4";
import Button from "./Button";

// Generate unique Id for each blog.
const blogs = [
  {
    id: uuid(),
    title: "An example blog",
    description: "A test description",
  },
  {
    id: uuid(),
    title: "An example blog 2",
    description: "A test description 2",
  },
  {
    id: uuid(),
    title: "An example blog 3",
    description: "A test description 3",
  },
  {
    id: uuid(),
    title: "An example blog 4",
    description: "A test description 4",
  },
];

// Display a list of blogs
// We do this using map.
// Always pass key to the child component
const blogData = blogs.map((blog) => (
  <Card key={blog.id}>
    <h1>{blog.title}</h1>
    <p>{blog.description}</p>

    {/* Pass event to button */}
    <Button
      onClick={() => {
        alert(`You visited ${blog.title}.`);
      }}
      text="Visit Blog"
      color="yellow"
    />
  </Card>
));

export default function ListsAndKeys() {
  return <div>{blogData}</div>;
}
