import React, { useState } from "react";
import { Box } from "@mui/system";
import MyNavbar from "./components/Navbar";
import OneImage from "./components/Card";

import "./App.css";
import SearchBreed from "./components/SearchBreed";
import Pill from "./components/Pill";
import { Typography } from "@mui/material";

function App() {
  const [inputBreed, setInputBreed] = useState("pug");
  const [inputSubBreed, setInputSubBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [subBreeds, setSubBreeds] = useState([]);

  //⁡⁢⁣⁣𝗳𝗲𝘁𝗰𝗵 𝗯𝘆 𝗯𝗿𝗲𝗲𝗱⁡
  const dataFetch = async (inputBreed) => {
    const url = `https://dog.ceo/api/breed/${inputBreed}/images`;
    const resp = await fetch(url);
    const data = await resp.json();
    setBreeds(data.message);
  };
  //⁡⁢⁣⁣𝗳𝗲𝘁𝗰𝗵 𝗯𝘆 𝘀𝘂𝗯𝗕𝗿𝗲𝗲𝗱⁡
  const dataFetchByBreed = async (inputSubBreed) => {
    const url = `https://dog.ceo/api/breed/${inputSubBreed}/list`;
    const resp = await fetch(url);
    const data = await resp.json();
    setSubBreeds(data.message);
    console.log("subBreeds", subBreeds);
  };

  const HandleSubBreed = (inputSubBreed) => {
    setInputSubBreed(inputSubBreed);
    dataFetchByBreed(inputSubBreed);
  };

  const HandleChange = (inputBreed) => {
    setInputBreed(inputBreed);
    dataFetch(inputBreed);
  };

  return (
    <div className="App">
      <MyNavbar />
      {/*   {<pre>{JSON.stringify(breeds, null, 2)}</pre>} */}
      <Box>
        <SearchBreed
          HandleChange={HandleChange}
          HandleSubBreed={HandleSubBreed}
        />
      </Box>
      <Box>
        {subBreeds.map((name, index) => {
          {
            {
              console.log("name:", name);
            }
            <Typography key={index}>{name}</Typography>;
            <Pill subBreedName={name} key={index} breedName={inputBreed} />;
          }
        })}
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
        {breeds.map((breed, index) => (
          <OneImage
            dataBreed={breed}
            key={index}
            breedName={inputBreed}
            subBreedName={name}
          />
        ))}
      </Box>
    </div>
  );
}

export default App;
