import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const ManyImages = ({ data }) => {
  return (
    <ImageList sx={{ width: "auto", height: "auto" }} cols={3} rowHeight={164}>
      {data.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={item}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ManyImages;
