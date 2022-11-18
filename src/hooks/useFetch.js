import react, { useEffect, useState } from "react";

const useFetch = () => {
  const [dogs, setDogs] = useState([]);
  console.log("Datos", dogs);
  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(`https://dog.ceo/api/breeds/list/all`)
      ).json();

      // set state when the data received
      setDogs(data);
    };

    dataFetch();
  }, []);
};

export default useFetch;
