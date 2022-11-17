import * as React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";

const CardDogVDos = ({ titles }) => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        rowSpacing={3}
        display="contents"
      >
        <Grid item xs={3}>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          <Item style={{ minHeight: "300px" }}>
            <Typography>{titles}</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardDogVDos;
