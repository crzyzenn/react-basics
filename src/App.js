import "./App.css";
import LearnToday from "./components/LearnToday";
import Exercise from "./components/Exercise";
import Login from "./components/Login";

// This is a functional component
function App() {
  // Returns JSX
  // Describe what the UI should look like..

  return (
    <>
      <LearnToday />

      <Login />
    </>
  );
}

export default App;
