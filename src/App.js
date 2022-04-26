import { Routes, Route } from "react-router-dom";
import Documents from "./components/Documents";
import Playground from "./components/Playground";
import About from "./components/About";
import Landing from "./components/Landing";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<Landing />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
