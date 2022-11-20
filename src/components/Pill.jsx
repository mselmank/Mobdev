import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Typography from "@mui/joy/Typography";
import React from "react";
const Pill = ({ breedName, subBreedName }) => {
  const [selected, setSelected] = React.useState("");

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      <Box>
        <Typography level="h2" fontSize="lg" id="best-movie" mb={2}>
          {breedName}
        </Typography>
        <RadioGroup
          name="best-movie"
          aria-labelledby="best-movie"
          row
          sx={{ flexWrap: "wrap", gap: 1 }}
        >
          <Chip
            key={subBreedName}
            variant={checked ? "soft" : "plain"}
            color={checked ? "primary" : "neutral"}
            startDecorator={
              checked && <CheckIcon sx={{ zIndex: 1, pointerEvents: "none" }} />
            }
          ></Chip>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default Pill;
