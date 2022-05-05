import { Routes, Route } from "react-router-dom";
import Documents from "./components/Documents";
import Playground from "./components/Playground";
import About from "./components/About";
import Landing from "./components/Landing";
import Home from "./components/Home";
import "./App.css";
import { Box } from "@mui/material";
import ScrollToTop from "react-scroll-to-top";
const response = require("./response.json");

const App = () => {
  console.log(response);

  return (
    <div className="bar">
      <Box className="main-box">
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index element={<Home response={response} />} />
            <Route
              path="/playground"
              element={<Playground response={response} />}
            />
            <Route path="/documents" element={<Documents />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Box>
      <ScrollToTop smooth color="#6f00ff" className="scroll_to_top"/>
    </div>
  );
};

export default App;
