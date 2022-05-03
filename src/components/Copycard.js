import React, { useState } from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import Behemoth from "../img/Behemoth.png";
import fflogo from "../img/fflogo.png";
import "./Copycard.css";

const Copycard = () => {
  //   const [isFlipped, setIsFlipped] = useState(false);

  //   const handleClick = () => {
  //     setIsFlipped((prevState) => ({ isFlipped: !prevState.isFlipped }));
  //   };

  return (
    <>
      <div className="artboard">
        <div className="card">
          <div className="card__side card__side--back">
            <Card sx={{ maxWidth: 350 }}>
              <CardActionArea>
                <CardMedia
                  className="card-side back"
                  component="img"
                  height="350"
                  image={fflogo}
                  alt={fflogo}
                  sx={{
                    border: 1,
                    borderColor: "grey.500",
                    borderRadius: "5px",
                  }} // with thin border between pic and title?
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    fontSize={20}
                  >
                    name: BEHEMOTH <br />
                    location: Eorzea <br /> elements: Earth <br /> weakness:
                    Light <br />
                    strength: Physical attack <br /> resistance: Magic <br />{" "}
                    weapon: Spell Flare, Maelstrom, Meteor
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>

          <div className="card__side card__side--front">
            <Card sx={{ maxWidth: 350 }}>
              <CardActionArea>
                <CardMedia
                  className="card-side front"
                  component="img"
                  height="350"
                  image={Behemoth}
                  alt={Behemoth}
                  sx={{
                    border: 1,
                    borderColor: "grey.500",
                    borderRadius: "5px",
                  }} // with thin border between pic and title?
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Behemoth
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    First appeared as a boss in Final Fantasy II. After
                    defeating him, Behemoths appear as normal enemies in the
                    forests near Mysidia.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Copycard;
