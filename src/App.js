import data from "./colors.json";
import Component1 from "./components/ParentComponent1";
// import Component2 from "./components/ParentComponent2";
function App() {
  return (
    <div className="App">
          <Component1 name={data} />
    </div>
  );
}
export default App;
