// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.div`
background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,0.5031550480769231) 0%, rgba(255,255,255,0) 7%, rgba(255,255,255,0) 93%, rgba(0,0,0,0.4999499198717948) 100%);
    border: 1px solid black;
`


export default function Character({characters}) {
  return (
    <div>
      {characters.map(character => {
        return (
          <CharacterCard key={character.name}>
            <h2>{character.name}</h2>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            </CharacterCard>
        )
        })}
    </div>
    )
}

