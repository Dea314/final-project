import React from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import Behemoth from "../img/Behemoth.png";
import "./Copycard.css";

const Copycard = () => {
  return (
    <>
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia
            className="card-side front"
            component="img"
            height="350"
            image={Behemoth}
            alt={Behemoth}
            sx={{ border: 1, borderColor: "grey.500" }} // with thin border between pic and title?
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Behemoth
            </Typography>
            <Typography variant="body2" color="text.secondary">
              First appeared as a boss in Final Fantasy II. After defeating him,
              Behemoths appear as normal enemies in the forests near Mysidia.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia
            className="card-side back"
            component="img"
            height="350"
            sx={{ border: 1, borderColor: "grey.500" }} // with thin border between pic and title?
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" fontSize={20}>
              name: BEHEMOTH <br />
              location: Eorzea <br /> elements: Earth <br /> weakness: Light{" "}
              <br />
              strength: Physical attack <br /> resistance: Magic <br /> weapon:
              Spell Flare, Maelstrom, Meteor
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default Copycard;
