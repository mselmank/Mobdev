import { useEffect, useState } from "react";
import { getImages } from "../helpers/getImages";

const useFetch = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch data
  const dataFetch = async () => {
    const newImages = await getImages();
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    dataFetch();
  }, []);
  return {
    images,
    isLoading,
  };
};

export default useFetch;
