import "./App.css";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import Fetch from "./components/Fetch";
import Array from "./components/Array";
import Previous from "./components/Previous";

function App() {
  return (
    <>
      <h1>Custom Hooks</h1>
      <Counter initialCount={10} maxCount={15} minCount={5} />
      <Toggle defaultValue={true} />
      <Previous />
      {/*  <Array /> */}
      {/* <Fetch url={} /> */}
    </>
  );
}

export default App;
