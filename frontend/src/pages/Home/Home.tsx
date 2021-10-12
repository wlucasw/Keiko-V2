import * as React from 'react';

import Style from './Home.style';

const Home = () => {
  const pokemon = {
    name: 'Carapuce',
    number: 7,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  };

  return (
    <Style.Intro>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>
        Tu vas pouvoir apprendre tout ce qu'il faut sur React, Redux et Symfony, et attraper des
        pokemons !
      </div>
      <div>Mon premier pokemon !</div>
      <div>Nom : {pokemon.name}</div>
      <div>Numéro : {pokemon.number}</div>
      <div>
        <img src={pokemon.image} alt=""></img>
      </div>
    </Style.Intro>
  );
};

export default Home;
