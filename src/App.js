import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Documents from "./components/Documents";
import Playground from "./components/Playground";
import About from "./components/About";
import Landing from "./components/Landing";
import Home from "./components/Home";
import { randomArray } from "./helpers/helpers.js";

import "./App.css";
import { Box } from "@mui/material";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const getAllCharacters = async () => {
      try {
        const {
          data: { characters },
        } = await axios.get(process.env.REACT_APP_API_URL);

        setResponse(randomArray(characters, 5));
      } catch (err) {}
    };
    getAllCharacters();
    console.log("RESPONSE", response);
  }, []);

  return (
    <div className="bar">
      <Box className="main-box">
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index element={<Home response={response} />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Box>
      <ScrollToTop smooth color="#fff" className="scroll_to_top" />
    </div>
  );
};

export default App;
