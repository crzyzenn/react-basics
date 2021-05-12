import "./App.css";
import LearnToday from "./components/LearnToday";
import Exercise from "./components/Exercise";
import Login from "./components/Login";
import Register from "./components/Register";
import { useEffect, useState } from "react";

// This is a functional component
function App() {
  // Returns JSX
  // Describe what the UI should look like..
  // const [data, setData] = useState([]);

  // const getPost = () => {
  //   // Let's make this more cleaner and easier to understand
  //   // ES6 -> async / await
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((resp) => {
  //       return resp.json();
  //     })
  //     .then((json) => setData(json))
  //     .catch((e) => console.log(e));
  // };

  // // If 2nd param is empty, useEffect only runs for the first time / render
  // useEffect(() => {
  //   getPost();
  // }, []);

  // const dataJsx = data.map((d) => <li key={d.id}>{d.title}</li>);

  // DONT DO THIS!!!
  // This will cause an infinite loop
  // Because react re-renders the component on state change.
  // getPost();

  return (
    <>
      <LearnToday />
      <hr />
      <Login />
      {/* <Register /> */}
      {/* <ul>{dataJsx}</ul> */}
    </>
  );
}

export default App;
