import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

// Exercise:
// When I click on the title of a post, it should alert me with the post's
// user id
// id
// body
// title

export default function Api() {
  const [data, setData] = useState([]);
  const match = useRouteMatch();

  const [selectedData, setSelectedData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
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
      {loading && "Loading Posts... Please wait."}
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
