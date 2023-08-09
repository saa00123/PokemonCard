import axios from "axios";
import { useState, useEffect } from "react";

const fetchPokemon = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id || ""}`, {
    params: { limit: 1000 },
  });
  return response.data;
};

const PokemonImage = (id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchPokemon(id);
        setData(result);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]); // id가 변경될 때마다 API 호출

  return { data, error, isLoading };
};

export default PokemonImage;
