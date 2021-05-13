import React, { useEffect, useState } from "react";
import axios from "axios";

// Exercise:
// When I click on the title of a post, it should alert me with the post's
// user id
// id
// body
// title

export default function Api() {
  const [data, setData] = useState([]);
  const fetchPosts = async () => {
    // ES6 -> async / await to fetch data from API.
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(data);
  };

  useEffect(() => {
    // fetchPost();
    fetchPosts();
  }, []);

  const handleListClick = ({ body, title, id, userId }) => {
    // alert(`${id} ${title} ${userId} ${body}`);
    console.log(id, title, userId, body);
  };

  const dataJsx = data.map((d) => (
    <li key={d.id} onClick={() => handleListClick(d)}>
      {d.title}
    </li>
  ));

  return (
    <div>
      <h1>Selected Post</h1>
      {/* Render selected post here.... */}
      <hr />
      <ul>{dataJsx}</ul>
    </div>
  );
}
