import logo from "./logo.svg";
import "./App.css";

import { Counter } from "./component/counter";

function App() {
  const value = 5;
  return (
    <div className="App">
      <Counter value={value} />
    </div>
  );
}

export default App;
