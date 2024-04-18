import "./App.css";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";

function App() {
  return (
    <>
      <h1>Custom Hooks</h1>
      <Counter initialCount={10} maxCount={15} minCount={5} />
      <Toggle defaultValue={true} />
    </>
  );
}

export default App;
