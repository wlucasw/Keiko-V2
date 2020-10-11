import * as React from 'react';

import Style from './Home.style';

class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <Style.Intro>
        <div>7 - Carapuce</div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"></img>
      </Style.Intro>
    );
  }
}

export default Home;
