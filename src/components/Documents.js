import { useState } from "react";
import {
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import { Link } from "react-scroll";
import CustomizedTables from "./Attributes";
import CodeBlock from "./Codeblock";
import {
  dracula,
  a11yLight,
  paraisoDark,
  paraisoLight,
} from "react-code-blocks";
import {
  baseURLSnippets,
  getSingleCharacterByName,
  getCharactersByElement,
  getCharactersByStrength,
  getCharactersByWeakness,
  getCharactersByResistance,
  getCharactersByWeapon,
  getCharactersByLocation,
} from "../helpers/codeSnippets";
import mernLogo from "../img/mernLogo.png";


const Documents = () => {
  const [themes] = useState([dracula, a11yLight, paraisoDark, paraisoLight]);
  const [theme, setTheme] = useState(dracula);
  const [language, setLanguage] = useState("javascript");
  return (
    <>
    <div className="wrapper-all">
      <div className="vertical-bar">
        <ul>
          <li>
            <Link
              to="introduction"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Introduction
            </Link>
          </li>
          <li>
            <Link
              to="currentVersion"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Current Version
            </Link>
          </li>
          <li>
            <Link
              to="rate"
              spy={true}
              smooth={true}
              style={{
                textDecoration: "none",
              }}
            >
              Rate Limit
            </Link>
          </li>
          <li>
            <Link
              to="base"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Base URL
            </Link>
          </li>
          <li>
            <Link
              to="characters"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Characters
            </Link>
          </li>
          <li>
            <Link
              to="endpoints"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Character endpoints
            </Link>
          </li>
          <li>
            <Link
              to="get-all"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Get all characters
            </Link>
          </li>
          <li>
            <Link
              to="single-name"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Get a character by name
            </Link>
          </li>
          <li>
            <Link
              to="by-element"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Get a character by element
            </Link>
          </li>
          <li>
            <Link
              to="by-strength"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Get a character by strength
            </Link>
          </li>
          <li>
            <Link
              to="by-weakness"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Get a character by weakness
            </Link>
          </li>
          <li>
            <Link
              to="by-resistance"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Get a character by resistance
            </Link>
          </li>
          <li>
            <Link
              to="by-weapon"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Get a character by weapon
            </Link>
          </li>
          <li>
            <Link
              to="by-location"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Get a character by location
            </Link>
          </li>
          <li>
            <Link
              to="errors"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Errors
            </Link>
          </li>
          <li>
            <Link
              to="collaboration"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Collaboration
            </Link>
          </li>
        </ul>
      </div>
      <div className="wrapper-text">
      <Typography variant="h4" align="center" className="title">
        <h3 className="doc-title">API Documentation</h3>
      </Typography>

        <Typography variant="h4" align="center" className="title">
          <div id="introduction">Introduction</div>

          <Typography variant="h6" align="center" className="title">
            <Box sx={{ width: 400 }}>
              <FormControl fullWidth>
                <InputLabel id="language">Language</InputLabel>
                <Select
                  labelId="language"
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <MenuItem value="javascript">Javascript</MenuItem>
                  <MenuItem value="curl">cURL</MenuItem>
                  <MenuItem value="php">PHP</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="theme">Theme</InputLabel>
                <Select
                  labelId="theme"
                  onChange={(e) => setTheme(themes[e.target.value])}
                >
                  <MenuItem value={0}>Dracula</MenuItem>
                  <MenuItem value={1}>Ally Light</MenuItem>
                  <MenuItem value={2}>Paraiso Dark</MenuItem>
                  <MenuItem value={3}>Paraiso Light</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Typography>
        </Typography>
        <Typography align="center">
          This documentation should give you all the information to make your
          HTTP requests, making you familiar with what's available to you to
          develop your project.
        </Typography>
        <Typography variant="h4" align="center" className="title">
          <div id="currentVersion">Current Version</div>
        </Typography>
        <Typography>
        The Game Characters API is open source, which means no authentication is 
        required to query the data. Since no authentication is needed, there is only 
        support for GET requests. The current version of the API is 1.
        </Typography>
        <Typography variant="h4" align="center" className="title">
          <div id="rate">Rate limit</div>
        </Typography>
        <Typography>
          There is a rate limit of 60 requests per hour from each IP address to
          prevent harmful activity. If you reach that limit, you will receive a
          message and regain access after an hour.
        </Typography>
        <Typography variant="h4" align="center" className="title">
          <div id="base">Base URL</div>
        </Typography>
        <CodeBlock
          language={language}
          theme={theme}
          snippets={baseURLSnippets}
        />
        <Typography align="center" className="routesURL">
          https://gamecharactersapi.herokuapp.com/playground
        </Typography>
        <Typography variant="h3" align="center" className="title">
          <div id="characters">Characters</div>
        </Typography>
        <Typography>
          The database structure is inspired by the Final Fantasy games and all
          the amazing characters throughout the series. The intention is to
          continue enlarging the database gradually with new characters. If you
          are a big fan of the series and want to contribute to this project
          feel free to contact us.
        </Typography>
        <Typography variant="h4" align="center" className="title">
          <div id="endpoints">Character Endpoints</div>
        </Typography>
        <Typography variant="h5" align="center" className="title">
          <div id="attributes">Character Attributes</div>
        </Typography>
        <Typography>
          <CustomizedTables />
        </Typography>
        <Typography variant="h4" align="center" className="title">
          <div id="get-all">Get all characters</div>
        </Typography>
        <Typography>
          Endpoint that retrieves information from all characters.
        </Typography>
        <CodeBlock
          language={language}
          theme={theme}
          snippets={baseURLSnippets}
        />
        <Typography align="center" className="routesURL">
          /playground
        </Typography>

        <Typography variant="h4" align="center" className="title">
          <div id="single-name">Get a single character by name</div>
        </Typography>
        <Typography>
        An endpoint that retrieves information by the name of the character, 
        the query is not case sensitive, so go ahead and use upper or lower 
        case to GET the data.
        </Typography>
        <CodeBlock
          language={language}
          theme={theme}
          snippets={getSingleCharacterByName}
        />
        <Typography align="center" className="routesURL">
          /playground?name=<span className="end-string">chimera </span>
        </Typography>
        <Typography variant="h4" align="center" className="title">
          <div id="by-element">Get characters by key elements</div>
        </Typography>
        <Typography>
        This endpoint queries a specific element that is contained within
          the character data. You can query one or more elements at once,
          separated by a comma, to find the characters with the chosen
          elements.
        </Typography>
        <CodeBlock
          language={language}
          theme={theme}
          snippets={getCharactersByElement}
        />
        <Typography align="center" className="routesURL">
          /playground?elements={" "}
          <span className="end-string">fire,water,holy </span>
        </Typography>

        <Typography variant="h4" align="center" className="title">
          <div id="by-strength">Get characters by strength</div>
        </Typography>
        <Typography>
        This endpoint queries a specific strength that a character has. 
        You can query more options between commas, and only the characters 
        with both inputs will be displayed.
        </Typography>
        <CodeBlock
          language={language}
          theme={theme}
          snippets={getCharactersByStrength}
        />

        <Typography align="center" className="routesURL">
          /playground?strength=
          <span className="end-string">attack blockers,size</span>
        </Typography>

        <Typography variant="h4" align="center" className="title">
          <div id="by-weakness">Get characters by weakness</div>
        </Typography>
        <Typography>
        This endpoint queries a specific weakness that a character has. You
          can query more options between commas and only the characters that have
          all inputs will be displayed.
        </Typography>
        <CodeBlock
          language={language}
          theme={theme}
          snippets={getCharactersByWeakness}
        />

        <Typography align="center" className="routesURL">
          /playground?weakness=
          <span className="end-string">slow movement,low hp</span>
        </Typography>

        <Typography variant="h4" align="center" className="title">
          <div id="by-resistance">Get characters by resistance</div>
        </Typography>
        <Typography>
          This endpoint queries one or more resistances per character. You
          can also query more options between commas and only the characters
          that have all inputs will be displayed.
        </Typography>
        <CodeBlock
          language={language}
          theme={theme}
          snippets={getCharactersByResistance}
        />

        <Typography align="center" className="routesURL">
          /playground?resistance=
          <span className="end-string">poison,confuse,death</span>
        </Typography>

        <Typography variant="h4" align="center" className="title">
          <div id="by-weapon">Get characters by weapon</div>
        </Typography>
        <Typography>
          This endpoint queries one or more weapons per character. You can query
          more options between commas and only the characters that have all
          inputs will be displayed.
        </Typography>
        <CodeBlock
          language={language}
          theme={theme}
          snippets={getCharactersByWeapon}
        />

        <Typography align="center" className="routesURL">
          /playground?weapon=
          <span className="end-string">confuse,aereo,meteor</span>
        </Typography>

        <Typography variant="h4" align="center" className="title">
          <div id="by-location">Get characters by location</div>
        </Typography>
        <Typography>
        This endpoint queries locations where a character was seen throughout
          the game. You can query more options between commas, and only the
          characters that have been in all places mentioned will be displayed.
        </Typography>
        <CodeBlock
          language={language}
          theme={theme}
          snippets={getCharactersByLocation}
        />

        <Typography align="center" className="routesURL">
          /playground?location=
          <span className="end-string">Palamecia,Pandaemonium</span>
        </Typography>
        <CodeBlock />
        <Typography variant="h3" align="center" className="title">
          <div id="errors"> Errors</div>
        </Typography>
        <Typography>
        All the query requests were programmed with status code in accordance with 
        the standard best practices.
        </Typography>
        <Typography variant="h3" align="center" className="title">
          <div id="collaboration"> Collaboration</div>
        </Typography>
        <Typography>
        We intend to continue working and developing better features for
          this project, so don't be shy; we would love to hear your suggestions and
          in case you are interested in collaborating on this project, feel free to contact us
          directly or open a pull request.🙂
          <div className="mernlogo">
            <a href="https://www.mongodb.com/mern-stack" target="_blank" rel="noreferrer">
            <img className="mernLogo" src={mernLogo} alt="Mern-Logo" />
            </a>
          </div> 
        </Typography>
        <Typography>
        This project was done following the MERN stack. MERN stands for MongoDB, Express, React 
          , and Node. MongoDB - come along for the database, Express(.js) and Node.js as web frameworks 
          for the API and, React(.js) as a client-side JavaScript framework for the Documentation. 
          Also, the webserver is powered by Node(.js). If you want to know about this project stack,
          feel free to take a look at the documentation by clicking the image above.

        </Typography>

      </div>
    </div>    
  </>
  );
};


export default Documents;
