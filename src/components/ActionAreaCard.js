import * as React from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
const assets = require("../assets.json");

const ActionAreaCard = ({ character }) => {
  return (
    <>
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={character.img_url}
            alt={character.name}
            sx={{ border: 1, borderColor: "grey.500" }} // with thin border between pic and title?
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {character.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {character.description}
            </Typography>
            <div>
              {character.elements.map((element) => {
                return (
                  <>
                    <img
                      src={assets.elements[element.toLowerCase()]}
                      alt={element}
                      height="25"
                    />
                  </>
                );
              })}
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
export default ActionAreaCard;
