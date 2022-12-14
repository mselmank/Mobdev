import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import MyNavbar from "./components/Navbar";
import OneImage from "./components/Card";
import "./App.css";
import SearchBreed from "./components/SearchBreed";

import {
  Alert,
  Button,
  Card,
  CardMedia,
  Link,
  Stack,
  Typography,
} from "@mui/material";

function App() {
  const [inputBreed, setInputBreed] = useState("");
  const [inputSubBreed, setInputSubBreed] = useState("");
  const [allBreeds, setAllBreeds] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [subBreeds, setSubBreeds] = useState([]);
  const [showError, setShowError] = useState(false);
  const [images, setImages] = useState([]);
  const [showSubBreeds, setShowSubBreeds] = useState(true);

  const handleClick = (e) => {
    const str = e.target.value;
    console.log("str", str);
    /* setInputSubBreed(str); */
    fetchImagesByBreed(inputBreed, str);
    setShowSubBreeds(false);
  };

  //โกโขโฃโฃ๐ณ๐ฒ๐๐ฐ๐ต ๐ฎ๐น๐น ๐น๐ถ๐๐โก
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

  //โกโขโฃโฃ๐ณ๐ฒ๐๐ฐ๐ต ๐ฏ๐ ๐ฏ๐ฟ๐ฒ๐ฒ๐ฑโก
  const dataFetch = async (inputBreed) => {
    const url = `https://dog.ceo/api/breed/${inputBreed}/images`;
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const data = await resp.json();
    setBreeds(data.message);
    console.log("breeds", breeds);
  };

  //โกโขโฃโฃ๐ณ๐ฒ๐๐ฐ๐ต ๐ฏ๐ ๐๐๐ฏ๐๐ฟ๐ฒ๐ฒ๐ฑโก
  const dataFetchByBreed = async (inputSubBreed) => {
    const url = `https://dog.ceo/api/breed/${inputSubBreed}/list`;
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const data = await resp.json();
    setSubBreeds(data.message);
  };
  //โกโขโฃโฃโกโขโฃโฃโกโขโฃโฃ๐ณ๐ฒ๐๐ฐ๐ต ๐ฏ๐ ๐๐๐ฏ๐๐ฟ๐ฒ๐ฒ๐ฑ ๐ฟ๐ฒ๐๐๐ฟ๐ป๐ ๐ฎ๐น๐น ๐ถ๐บ๐ฎ๐ด๐ฒ๐ ๐ณ๐ฟ๐ผ๐บ ๐๐๐ฏ-๐ฏ๐ฟ๐ฒ๐ฒ๐ฑ
  const fetchImagesByBreed = async (inputBreed, inputSubBreed) => {
    const url = `https://dog.ceo/api/breed/${inputBreed}/${inputSubBreed}/images`;
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const data = await resp.json();
    setImages(data.message);
    console.log("images", images);
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
      setShowSubBreeds(true);
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
              <Button onClick={(e) => handleClick(e)} value={name} key={index}>
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
        {/* Quizas hacer un operador ternario para dataBreed que sea dinamico. */}
        {showSubBreeds === true
          ? breeds &&
            breeds.map((breed, index) => (
              <OneImage
                dataBreed={breed}
                key={index}
                breedName={inputBreed}
                subBreedName={breed}
              />
            ))
          : images &&
            images.map((image, index) => (
              /*      <OneImage
                dataSubBreed={image}
                key={index}
                breedName={inputBreed}
                subBreedName={image}
              />; */

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
                    key={index}
                    height="auto"
                    image={image}
                    alt={image}
                  />
                </Card>
              </Box>
            ))}
      </Box>
    </div>
  );
}

export default App;
