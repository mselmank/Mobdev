import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import DogComponent from "../assets/Icon";

const MyNavbar = () => {
  return (
    <AppBar sx={{ bgcolor: "black", borderRadius: 2 }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>{/*       <DogComponent /> */}</Toolbar>
      </Container>
    </AppBar>
  );
};

export default MyNavbar;
