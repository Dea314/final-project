import { Routes, Route } from "react-router-dom";
import Documents from "./components/Documents";
import Playground from "./components/Playground";
import About from "./components/About";
import Landing from "./components/Landing";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="/playground" element={<Playground />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
