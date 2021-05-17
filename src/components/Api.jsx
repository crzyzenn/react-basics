import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

// Exercise:
// Implement loading in the API.
// And show the user the posts are loading...

export default function Api() {
  const [data, setData] = useState([]);
  const match = useRouteMatch();

  const [selectedData, setSelectedData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    // ES6 -> async / await to fetch data from API.
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Render the data from API..
  const dataJsx = data.map((d) => (
    <li
      style={{ cursor: "pointer" }}
      key={d.id}
      // onClick={() => handleListClick(d)}
    >
      <Link to={`${match.url}/${d.id}`}>{d.title}</Link>
    </li>
  ));

  return (
    <div>
      <h1>Selected Post</h1>

      {/* Show loading if the post is loading.. */}
      {loading && "Loading posts...Please wait.."}

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
