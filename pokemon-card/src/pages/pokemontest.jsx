import React, { useState, useEffect } from "react";
import styled from "styled-components";
import pokemon from "pokemontcgsdk";

const Image = styled.div`
  width: 16rem;
  height: 22rem;
  background-repeat: no-repeat;
  background-image: ${({ url }) => `url(${url})`};
`;

function PokemonTest() {
  const [results, SetResults] = useState([]);
  pokemon.configure({ apiKey: process.env.REACT_APP_POKEMON_API_KEY });
  useEffect(() => {
    // id로 카드 찾기
    // pokemon.card.find('base2-1').then((card) => {
    //   console.log(card);
    // });

    // q 파라미터로 카드 찾기
    pokemon.card.where({ q: 'name:Charizard' }).then((result) => {
      console.log('result : ', result);
      SetResults(result);
    });
  }, []);

  console.log('results : ', results.data[67].images.small);
  const ImageTest = results.data[67].images.small;

  // results.map((result) => {
  //   console.log('img result : ', result.data[0].images.small);
  //   return (
  //     <>
  //       <Image>{result.images.small}</Image>
  //     </>
  //   );
  // });

  return (
    <div>
      <Image url={ImageTest} />
    </div>
  );
}

export default PokemonTest;
