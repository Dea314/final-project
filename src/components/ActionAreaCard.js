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
      <Card sx={{ width: "20%" }}>
        <CardActionArea sx={{ height: "100%" }}>
          <CardMedia
            component="img"
            height="350"
            image={character.img_url}
            alt={character.name}
            sx={{
              border: 1,
              borderColor: "grey.500",
              borderRadius: "5px",
              boxShadow: "0 2rem 6rem rgba(0, 0, 0, 0.1)",
            }}
          />
          <CardContent sx={{ height: "100%" }}>
            <Typography gutterBottom variant="h5" color="#5279EC">
              {character.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {character.description}
            </Typography>
            <div className="elements">
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
