import React from 'react';

// import SelectCharacter from './SelectCharacter';
import ChooseCharacter from './components/choose-character';
import Battle from './components/battle';

interface IProps {}
interface IState {
  currentCharacter: any;
  enemyCharacter: any;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentCharacter: {},
      enemyCharacter: {},
    };
  }

  playerSelectedCharacter = (player: any, enemy: any) => {
    this.setState(() => ({ currentCharacter: player, enemyCharacter: enemy }));
  };

  render({ currentCharacter, enemyCharacter } = this.state) {
    return (
      <>
        <ChooseCharacter handlePlayerChoice={this.playerSelectedCharacter} />
        <Battle player={currentCharacter} enemy={enemyCharacter} />
      </>
    );
  }
}
// }

export default App;
