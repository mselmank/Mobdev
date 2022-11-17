import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CardDog = ({ title }) => {
  return (
    <Card sx={{ maxWidth: 450, minHeight: 500 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {title}
          </Typography>
          <CardMedia
            component="img"
            height="auto"
            image="https://images.dog.ceo/breeds/newfoundland/n02111277_1018.jpg"
            alt="dog"
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardDog;
