import Card from "@mui/material/Card";
import {
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import "./Copycard.css";
const assets = require("../assets.json");

const Copycard = ({ character }) => {
  return (
    <div className="artboard">
      <div className="card">
        <div className="card__side card__side--back">
          <Card sx={{ maxWidth: 370 }}>
            <CardActionArea>
              <CardMedia
                className="card-side back"
                component="img"
                height="350"
                image={character.img_url}
                alt={character.name}
                sx={{
                  border: 1,
                  borderColor: "grey.500",
                  borderRadius: "5px",
                  margin: "0",
                }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  fontSize={18}
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
                  margin: "0",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {character.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {character.description}
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
