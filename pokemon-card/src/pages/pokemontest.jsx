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
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    pokemon.configure({ apiKey: process.env.REACT_APP_POKEMON_API_KEY });

    // id로 카드 찾기
    // pokemon.card.find('base2-1').then((card) => {
    //   console.log(card);
    // });

    // q 파라미터로 카드 찾기
    pokemon.card.where({ q: "name:Charizard" }).then((result) => {
      setResults(result);
      if(result.data){
        console.log(result.data[0]);
      }
      // console.log("result : ", result);
      // SetResults(result);
    });
  }, [setResults, results]);

  console.log("results : ", results);
  // const ImageTest = results.data;

  // results.map((result) => {
  //   console.log('img result : ', result.data.images.small);
  //   return (
  //     <>
  //       <Image>{result.images.small}</Image>
  //     </>
  //   );
  // });

  for(let i=0; i<50; i++){
    console.log('img : ', results.data[i].images.small)
  }

  return <div>{/* <Image url={ImageTest} /> */}</div>;
}

export default PokemonTest;
