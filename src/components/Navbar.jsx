import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import DogComponent from "../assets/Icon";
import { Link } from "@mui/material";

const MyNavbar = () => {
  return (
    <AppBar sx={{ bgcolor: "white", borderRadius: 2 }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            {" "}
            <DogComponent />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MyNavbar;
