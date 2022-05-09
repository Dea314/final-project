import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Grid from "@mui/material/Grid";
import Form from "./Form";
import Copycard from "./Copycard";
import "react-toastify/dist/ReactToastify.css";
import CopyButton from "./CopyButton";

const Playground = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [playgroundCharacters, setPlaygroundChracters] = useState([]);
  const [currentQuery, setCurrentQuery] = useState(null);

  useEffect(() => {
    const getCharacter = async () => {
      const urlQuery = new URLSearchParams();
      if (searchQuery) {
        if (searchQuery?.name) {
          urlQuery.append("name", searchQuery.name);
        }
        if (searchQuery?.optionsElement?.length) {
          urlQuery.append("elements", searchQuery.optionsElement.join(","));
        }
        if (searchQuery?.optionsResistance?.length) {
          urlQuery.append(
            "resistance",
            searchQuery.optionsResistance.join(",")
          );
        }
        if (searchQuery?.optionsStrength?.length) {
          urlQuery.append("weakness", searchQuery.optionsStrength.join(","));
        }
        if (searchQuery?.optionsWeakness?.length) {
          urlQuery.append("elements", searchQuery.optionsWeakness.join(","));
        }
        if (searchQuery?.optionsWeapon?.length) {
          urlQuery.append("weapon", searchQuery.optionsWeapon.join(","));
        }
        setCurrentQuery(urlQuery);
      }
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}?${urlQuery}`
        );
        setPlaygroundChracters(data.characters);
        toast.success("Success! Check your results");
      } catch (err) {
        toast.error(err.response?.data.error || err.message);
      }
    };
    getCharacter();
  }, [searchQuery]);

  return (
    <>
      <ToastContainer />
      <div>
        <h4 className="url">
          <textarea>
            URL: {process.env.REACT_APP_API_URL}
            {/* {currentQuery && `?${currentQuery.toString()}`} */}
          </textarea>
        </h4>
        <CopyButton textToCopy {currentQuery && `?${currentQuery.toString()}`} />
      </div>
      <Form setSearchQuery={setSearchQuery} />
      <div className="body-for-cards">
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          {playgroundCharacters.length
            ? playgroundCharacters.map((character) => (
                <Grid
                  item
                  key={character._id}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <Copycard character={character} />
                </Grid>
              ))
            : "No results"}
        </Grid>
      </div>
    </>
  );
};
export default Playground;
