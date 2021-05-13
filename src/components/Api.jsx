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
  // const fetchPost = async () => {
  //   // ES6 -> async / await to fetch data from API.
  //   let fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   console.log(fetchData);
  //   let jsonResp = await fetchData.json();
  //   setData(jsonResp);
  // };
  const fetchPostWithAxios = async () => {
    // ES6 -> async / await to fetch data from API.
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(data);
  };

  useEffect(() => {
    // fetchPost();
    fetchPostWithAxios();
  }, []);

  // DONT DO THIS!!!
  // This will cause an infinite loop
  // Because react re-renders the component on state change.
  // getPost();

  const dataJsx = data.map((d) => <li key={d.id}>{d.title}</li>);

  return <ul>{dataJsx}</ul>;
}
