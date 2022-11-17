import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import DogComponent from '../assets/Icon';

const MyNavbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DogComponent sx={{ display: { xs: 'none', md: 'none',xl:'none' }}} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MyNavbar;
