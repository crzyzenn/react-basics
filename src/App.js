import "./App.css";
import LearnToday from "./components/LearnToday";
import Exercise from "./components/Exercise";

// This is a functional component
function App() {
  // Returns JSX
  // Describe what the UI should look like..

  return (
    <>
      <LearnToday />

      {/* Props and children */}
      {/* <Card>
        <h1>Title</h1>
        <p>Description</p>
      </Card> */}

      {/* <ConditionalRendering /> */}

      {/* <Button text="Button with default prop called color" />
      <Button text="Normal button" color="red" />
      <Button
        text="Button with event! Click me!"
        color="yellow"
        onClick={() => alert("You pressed the button.")}
      /> */}

      {/* <div>
        <h1>Lists & Keys</h1>
        <ListsAndKeys />
      </div> */}

      <Exercise />
    </>
  );
}

export default App;
