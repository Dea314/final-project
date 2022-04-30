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
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={character.img_url}
            alt={character.name}
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
