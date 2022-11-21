import styled from "@emotion/styled";
import { Button, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Search from "../assets/Search";

const SearchBreed = ({ HandleChange, HandleSubBreed }) => {
  const [inputValue, setInpuntValue] = useState("");
  const ColorButton = styled(Button)(() => ({
    color: "black",
    backgroundColor: "gray",
  }));

  const onInputChange = ({ target }) => {
    setInpuntValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    HandleChange(inputValue.toLocaleLowerCase());
    HandleSubBreed(inputValue.toLocaleLowerCase());
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        mt={8}
      >
        <TextField
          id="outlined-basic"
          label="Search by breed"
          variant="outlined"
          onChange={onInputChange}
          value={inputValue}
        ></TextField>
        <Box sx={{ mt: 2, ml: 1 }}>
          <ColorButton type="submit" variant="contained">
            <Search />
          </ColorButton>
        </Box>
      </Stack>
    </form>
  );
};

export default SearchBreed;
