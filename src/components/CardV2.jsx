import * as React from "react";
import { Card, CardMedia } from "@mui/material";
import { Box } from "@mui/system";

const OneImage = ({ dataBreed, BreedName }) => {
  return (
    <Box sx={{}}>
      <Card
        sx={{
          maxWidth: 345,
          m: 1,
          p: 4,
          border: 2,
          boxShadow: 5,
          borderRight: 10,
          borderBottom: 10,
          borderBottomRightRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderTopLeftRadius: 15,
        }}
      >
        <CardMedia
          component="img"
          height="auto"
          image={dataBreed}
          alt={dataBreed}
        />
      </Card>
    </Box>
  );
};

export default OneImage;
