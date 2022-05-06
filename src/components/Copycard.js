import React, { useState } from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import fflogo from "../img/fflogo.png";
import "./Copycard.css";

const Copycard = ({ character }) => {
  //   const [isFlipped, setIsFlipped] = useState(false);

  //   const handleClick = () => {
  //     setIsFlipped((prevState) => ({ isFlipped: !prevState.isFlipped }));
  //   };

  return (
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
                  name: {character.name} <br />
                  location: {character.location.join(", ")} <br />
                  elements: {character.elements.join(", ")} <br />
                  weakness: {character.weakness.join(", ")} <br />
                  strength: {character.strength.join(", ")} <br />
                  weapon: {character.weapon.join(", ")}
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
                image={character.img_url}
                alt={character.name}
                sx={{
                  border: 1,
                  borderColor: "grey.500",
                  borderRadius: "5px",
                }} // with thin border between pic and title?
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {character.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {character.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Copycard;
