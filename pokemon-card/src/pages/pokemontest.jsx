import React, { useState, useEffect } from "react";
import styled from "styled-components";
import pokemon from "pokemontcgsdk";

const Image = styled.div`
  width: 10rem;
  height: 20rem;
  background-repeat: none;
  background-image: ${(url) => `url(${url})`};
`;

function PokemonTest() {
  const [results, SetResults] = useState([]);
  pokemon.configure({ apiKey: process.env.REACT_APP_POKEMON_API_KEY });
  useEffect(() => {
    // id로 카드 찾기
    pokemon.card.find("base2-1").then((card) => {
      console.log(card);
    });

    // q 파라미터로 카드 찾기
    pokemon.card.where({ q: "name:Charizard" }).then((result) => {
      SetResults(result);
    });
  }, []);

  console.log("results : ", results);

  results.map((result) => {
    console.log("img result : ", result.images);
    return (
      <div>
        {results.map((result) => (
          <img src={result.images.small} alt={result.name} />
        ))}
      </div>
    );
  });
}

export default PokemonTest;
