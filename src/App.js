import { Routes, Route } from "react-router-dom";
import Documents from "./components/Documents";
import Playground from "./components/Playground";
import About from "./components/About";
import Landing from "./components/Landing";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Landing</div>} />
        <Route path="/playground" element={<div>Playground</div>} />
        <Route path="/documents" element={<div>Documents</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </div>
  );
};

export default App;
