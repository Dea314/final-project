import { Routes, Route } from "react-router-dom";
import Documents from "./components/Documents";
import Playground from "./components/Playground";
import About from "./components/About";
import Landing from "./components/Landing";
import Home from "./components/Home";
import "./App.css";
import { Box } from "@mui/material";
const response = require("./response.json");

const App = () => {
  console.log(response);

  return (
    <Box>
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
  );
};

export default App;
