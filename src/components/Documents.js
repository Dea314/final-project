import { useState } from "react";
import { Typography } from "@mui/material";
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
} from "../helpers/codeSnippets";

const Documents = () => {
  const [themes] = useState([dracula, a11yLight, paraisoDark, paraisoLight]);
  const [theme, setTheme] = useState(dracula);
  const [language, setLanguage] = useState("javascript");
  return (
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
              to="other-anguages"
              spy={true}
              smooth={true}
              style={{ textDecoration: "none" }}
            >
              Other Languages
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
        <h1 align="center">API Documentation</h1>

        <Typography variant="h4" align="center" className="title">
          <div id="introduction">Introduction</div>
          SELECT LANGUAGE:
          <select onChange={(e) => setLanguage(e.target.value)}>
            <option value="javascript">Javascript</option>
            <option value="curl">cURL</option>
            <option value="php">PHP</option>
          </select>
          SELECT THEME:
          <select onChange={(e) => setTheme(themes[e.target.value])}>
            <option value={0}>dracula</option>
            <option value={1}>Ally</option>
            <option value={2}>paraisoDark</option>
            <option value={3}>paraisoLight</option>
          </select>
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
          The current version of the API is 1. The Game Characters API is an
          open API, which means no authentication is required to query the data.
          Since no authentication is needed, there is only support for GET
          requests.
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
          the amazing characters through out the series. The intention is to
          continue enlarging the database gradualy with new characters. If you
          are a big fan of the series and want to contribure to this project
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
          Endpoint that retrieve information from all characters.
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
          Endpoint that retrieve information by the name of the character, the
          query is not case sensitive, so go ahead and use upper or lower case
          to GET the data.
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
          This endpoint queries an especific element that is contained within
          the chacacter data. You can query one or multiple elements at once
          adding comma (,) in between to find the characters with the chosen
          elements.
        </Typography>
        <Typography align="center" className="routesURL">
          /playground?elements={" "}
          <span className="end-string">fire,water,holy </span>
        </Typography>

        <Typography variant="h4" align="center" className="title">
          <div id="by-strength">Get characters by strength</div>
        </Typography>
        <Typography>
          This endpoint queries an especific strength that a chacacter has. You
          can query more options between commas and only the characters that has
          both inputs will be displayed.
        </Typography>
        <Typography align="center" className="routesURL">
          /playground?strength=
          <span className="end-string">attack blockers,size</span>
        </Typography>

        <Typography variant="h4" align="center" className="title">
          <div id="by-weakness">Get characters by weakness</div>
        </Typography>
        <Typography>
          This endpoint queries an especific weakness that a chacacter has. You
          can query more options between commas and only the characters that has
          all inputs will be displayed.
        </Typography>
        <Typography align="center" className="routesURL">
          /playground?weakness=
          <span className="end-string">slow movement,low hp</span>
        </Typography>

        <Typography variant="h4" align="center" className="title">
          <div id="by-resistance">Get characters by resistance</div>
        </Typography>
        <Typography>
          This endpoint queries one or more resistance data per character. You
          can also query more options between commas and only the characters
          that has all inputs will be displayed.
        </Typography>
        <Typography align="center" className="routesURL">
          /playground?resistance=
          <span className="end-string">poison,confuse,death</span>
        </Typography>

        <Typography variant="h4" align="center" className="title">
          <div id="by-weapon">Get characters by weapon</div>
        </Typography>
        <Typography>
          This endpoint queries one or more weapons per character. You can query
          more options between commas and only the characters that has all
          inputs will be displayed.
        </Typography>
        <Typography align="center" className="routesURL">
          /playground?weapon=
          <span className="end-string">confuse,aereo,meteor</span>
        </Typography>

        <Typography variant="h4" align="center" className="title">
          <div id="by-location">Get characters by location</div>
        </Typography>
        <Typography>
          This endpoint queries locations that a character was seen through out
          the game. You can query more options between commas and only the
          characters that has been in all places mentioned will be displayed.
        </Typography>
        <Typography align="center" className="routesURL">
          /playground?location=
          <span className="end-string">Palamecia,Pandaemonium</span>
        </Typography>
        <CodeBlock />
        <Typography variant="h3" align="center" className="title">
          <div id="other-anguages"> Other Languages </div>
        </Typography>
        <Typography>
          Gummi bears danish jelly beans tootsie roll carrot cake apple pie
          soufflé pie caramels. Marshmallow soufflé shortbread bear claw sweet
        </Typography>
        <Typography variant="h3" align="center" className="title">
          <div id="collaboration"> Collaboration</div>
        </Typography>
        <Typography variant="h3" align="center" className="title">
          <div id="errors"> Errors</div>
        </Typography>
        <Typography>
          Gummi bears danish jelly beans tootsie roll carrot cake apple pie
          soufflé pie caramels. Marshmallow soufflé shortbread bear claw sweet
        </Typography>
        <Typography variant="h3" align="center" className="title">
          <div id="collaboration"> Collaboration</div>
        </Typography>
        <Typography>
          Biscuit cake lemon drops danish carrot cake sesame snaps pastry candy
          canes. Apple pie sweet roll danish ice cream cake cake cake dessert
        </Typography>
        <h2>Playground - Json</h2>
      </div>
    </div>
  );
};

export default Documents;
