import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "./App.css";
import CardDog from "./components/Card";
import CardDogVDos from "./components/CardV2";
import MyNavbar from "./components/Navbar";

function App() {
  const [names, setNames] = useState(["titulo 1", "titulo 2", "titulo 3"]);

  return (
    <div className="App">
      <MyNavbar />

      {names.map((name) => (
        <CardDogVDos titles={name} key={name.id} />
      ))}
    </div>
  );
}

export default App;
