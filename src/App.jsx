import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import MyNavbar from "./components/Navbar";
import OneImage from "./components/Card";
import "./App.css";
import SearchBreed from "./components/SearchBreed";

import { Alert, Button, Link, Stack, Typography } from "@mui/material";

function App() {
  const [inputBreed, setInputBreed] = useState("");
  const [inputSubBreed, setInputSubBreed] = useState("");
  const [allBreeds, setAllBreeds] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [subBreeds, setSubBreeds] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleClick = ({ target }) => {
    const str = target.value;
    setInputSubBreed(str);
    fetchImagesByBreed(inputBreed, inputSubBreed);
  };

  //⁡⁢⁣⁣𝗳𝗲𝘁𝗰𝗵 𝗮𝗹𝗹 𝗹𝗶𝘀𝘁⁡
  const allDataFetch = async () => {
    const url = `https://dog.ceo/api/breeds/list/all`;
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const data = await resp.json();
    const copy = JSON.parse(JSON.stringify(data.message));
    const aux = Object.keys(copy);
    setAllBreeds(aux);
  };

  //⁡⁢⁣⁣𝗳𝗲𝘁𝗰𝗵 𝗯𝘆 𝗯𝗿𝗲𝗲𝗱⁡
  const dataFetch = async (inputBreed) => {
    const url = `https://dog.ceo/api/breed/${inputBreed}/images`;
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const data = await resp.json();
    setBreeds(data.message);
  };
  //⁡⁢⁣⁣𝗳𝗲𝘁𝗰𝗵 𝗯𝘆 𝘀𝘂𝗯𝗕𝗿𝗲𝗲𝗱⁡
  const dataFetchByBreed = async (inputSubBreed) => {
    const url = `https://dog.ceo/api/breed/${inputSubBreed}/list`;
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const data = await resp.json();
    setSubBreeds(data.message);
  };
  //⁡⁢⁣⁣⁡⁢⁣⁣⁡⁢⁣⁣𝗳𝗲𝘁𝗰𝗵 𝗯𝘆 𝘀𝘂𝗯𝗕𝗿𝗲𝗲𝗱 𝗿𝗲𝘁𝘂𝗿𝗻𝘀 𝗮𝗹𝗹 𝗶𝗺𝗮𝗴𝗲𝘀 𝗳𝗿𝗼𝗺 𝘀𝘂𝗯-𝗯𝗿𝗲𝗲𝗱
  const fetchImagesByBreed = async (inputBreed, inputSubBreed) => {
    const url = `https://dog.ceo/api/breed/${inputBreed}/${inputSubBreed}/images`;
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const data = await resp.json();
    setImages(data.message);
  };

  /*   const arrayDataFetch = async (arr) => {
    const url = arr.map((item) => {
      `https://dog.ceo/api/breed/${inputBreed}/${item}/images`;
    });
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const data = await resp.json();
    setImages(data);
  }; */

  const HandleChange = (inputBreed) => {
    if (allBreeds.includes(inputBreed.toLocaleLowerCase())) {
      setInputBreed(inputBreed.toLocaleLowerCase());
      dataFetch(inputBreed.toLocaleLowerCase());
    } else {
      setInputBreed("");
      setShowError(true);
    }
  };
  const HandleSubBreed = (inputSubBreed) => {
    dataFetchByBreed(inputSubBreed.toLocaleLowerCase());
  };

  useEffect(() => {
    allDataFetch();
  }, []);

  return (
    <div className="App">
      <MyNavbar />
      {/*    {<pre>{JSON.stringify(allBreeds, null, 2)}</pre>} */}
      {/*   {<pre>{JSON.stringify(breeds, null, 2)}</pre>} */}

      <Box>
        {showError !== true ? (
          <SearchBreed
            HandleChange={HandleChange}
            HandleSubBreed={HandleSubBreed}
          />
        ) : (
          <Box sx={{ mt: 4 }}>
            <Alert severity="error" color="warning">
              Ingresa bien el nombre de la raza
            </Alert>
            <Link href="/">
              <Typography>Volver</Typography>
            </Link>
          </Box>
        )}
      </Box>

      <Stack direction="row" justifyContent="center" alignItems="center" mt={4}>
        {subBreeds &&
          subBreeds.map((name, index) => {
            return (
              <Button onClick={handleClick} value={name} key={index}>
                {name}
              </Button>
            );
          })}
      </Stack>
      <Box
        sx={{
          flexWrap: "wrap",
          display: "flex",
          p: 4,
          m: 4,
          maxWidth: "auto",
        }}
      >
        {breeds &&
          breeds.map((breed, index) => (
            <OneImage
              dataBreed={breed}
              key={index}
              breedName={inputBreed}
              subBreedName={breed}
            />
          ))}
      </Box>
    </div>
  );
}

export default App;
