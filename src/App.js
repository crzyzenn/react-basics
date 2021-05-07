import "./App.css";
import Counter from "./components/Counter";
import Input from "./components/Input";

// This is a functional component
function App() {
  // Returns JSX
  // Describe what the UI should look like..
  return (
    <div>
      <h1>My App</h1>

      {/* Self closing tag <SomeComponent /> */}
      <Counter />
      <Input placeHolderKeyword="Firstname" someProp="SomeValue" />
      <Input placeHolderKeyword="Lastname" someProp="SomeValue" />
      <Input placeHolderKeyword="Email" someProp="SomeValue" />
      <Input placeHolderKeyword="Password" someProp="SomeValue" />
    </div>
  );
}

export default App;
