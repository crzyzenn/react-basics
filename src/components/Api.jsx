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

  const [selectedData, setSelectedData] = useState(null);

  const fetchPosts = async () => {
    // ES6 -> async / await to fetch data from API.
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleListClick = (data) => {
    setSelectedData(data);
  };

  // Render the data from API..
  const dataJsx = data.map((d) => (
    <li
      style={{ cursor: "pointer" }}
      key={d.id}
      onClick={() => handleListClick(d)}
    >
      {d.title}
    </li>
  ));

  return (
    <div>
      <h1>Selected Post</h1>
      {/* Render */}
      {selectedData && (
        <div>
          <h2>{selectedData.title}</h2>
          <h3>By {selectedData.userId}</h3>
          <p>{selectedData.body}</p>
        </div>
      )}
      <hr />
      <ul>{dataJsx}</ul>
    </div>
  );
}
