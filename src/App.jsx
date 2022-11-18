import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import MyNavbar from "./components/Navbar";
import { TextField } from "@mui/material";
import OneImage from "./components/CardV2";
import "./App.css";

function App() {
  const [inputBreed, setInputBreed] = useState("dachshund");
  const [breeds, setBreeds] = useState([]);

  const GetDataByBreed = () => {
    useEffect(() => {
      const dataFetch = async () => {
        const url = `https://dog.ceo/api/breed/${inputBreed}/images`;
        const resp = await fetch(url);
        const data = await resp.json();
        setBreeds(data.message);
      };

      dataFetch();
    }, []);
  };
  GetDataByBreed();
  console.log("Breed:", breeds);

  return (
    <div className="App">
      <MyNavbar />
      {/*   {<pre>{JSON.stringify(breeds, null, 2)}</pre>} */}
      <Box sx={{ m: 5, p: 5 }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search by breed"
          variant="outlined"
        ></TextField>
      </Box>

      <Box
        sx={{
          flexWrap: "wrap",
          display: "flex",
          p: 4,
          m: 4,
          maxWidth: "auto",
        }}
      >
        {breeds.map((breed) => (
          <OneImage dataBreed={breed} key={breed.id} BreedName={inputBreed} />
        ))}
      </Box>
    </div>
  );
}

export default App;
