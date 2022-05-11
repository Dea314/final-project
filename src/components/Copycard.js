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
        <div className="card__side card__side--front">
          <Card sx={{ maxWidth: 370, minHeight: "850px" }}>
            <CardActionArea>
              <CardMedia
                className="card-side-front"
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
              <CardContent
                sx={{
                  height: "500px",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  fontSize={18}
                >
                  <div className="card-name">{character.name} </div> <br />
                  <div>
                    <b>location:</b> {character.location.join(", ")}
                  </div>
                  <br />
                  <div>
                    <b>elements:</b> {character.elements.join(", ")}
                  </div>
                  <br />
                  <div>
                    <b>weakness:</b> {character.weakness.join(", ")}
                  </div>
                  <br />
                  <div>
                    <b>strength:</b> {character.strength.join(", ")}
                  </div>
                  <br />
                  <div>
                    <b>weapon:</b> {character.weapon.join(", ")}{" "}
                  </div>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="card__side card__side--back">
          <Card sx={{ maxWidth: 370, minHeight: "850px" }}>
            <CardActionArea>
              <CardMedia
                className="card-side back"
                component="img"
                height="250"
                image={character.img_url}
                alt={character.name}
                sx={{
                  border: 1,
                  borderColor: "grey.500",
                  borderRadius: "5px",
                  margin: "0",
                }}
              />
              <CardContent
                sx={{
                  minHeight: "600px",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#5279EC"
                >
                  {character.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {character.description}
                  <div className="elements">
                    {character.elements.map((element) => {
                      return (
                        <>
                          <img
                            src={assets.elements[element.toLowerCase()]}
                            alt={element}
                            height="25"
                            display="inline-block"
                            margin="25px"
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
