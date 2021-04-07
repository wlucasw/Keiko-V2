import * as React from 'react';

import Style from './Home.style';

const Home = () => {
  const pokemon = 'Carapuce';

  return (
    <Style.Intro>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>
        Tu vas pouvoir apprendre tout ce qu'il faut sur React, Redux et Symfony, et attraper des
        pokemons !
      </div>
      <div>Commence par créer ton premier pokemon: {pokemon}</div>
    </Style.Intro>
  );
};

export default Home;
