import "./App.css";
import Api from "./components/Api";
import LearnToday from "./components/LearnToday";

// This is a functional component
function App() {
  // Returns JSX
  // Describe what the UI should look like..

  return (
    <>
      <LearnToday />
      <hr />
      <Api />
    </>
  );
}

export default App;
