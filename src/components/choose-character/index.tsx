import React from 'react';

import soldierInfo from '../../soldier-info.json';
import CharacterList from './CharacterList';

interface IProps {}
interface IState {
  currentCharacter: any;
  enemyCharacter: any;
  soldiers: any;
  characterChoosen: boolean;
}

class ChooseCharacter extends React.Component<IProps, IState> {
  variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      currentCharacter: {},
      soldiers: {},
      characterChoosen: true,
      enemyCharacter: {},
    };
  }

  componentDidMount() {
    const { soldiers } = soldierInfo;

    this.setState(() => ({
      soldiers,
    }));

    this.setState((prevState) => ({
      currentCharacter: prevState.soldiers[6],
    }));
    const randomEnemyNumber = Math.floor(Math.random() * 6);
    this.setState((prevState) => ({
      enemyCharacter: prevState.soldiers[randomEnemyNumber],
    }));
  }

  handleCharacterClick = (characterClicked: any) => {
    // const randomEnemyNumber = Math.floor(Math.random() * 6);
    // this.setState((prevState) => ({
    //   enemyCharacter: prevState.soldiers[randomEnemyNumber],
    // }));
    console.log('here');
    console.log(this.state.enemyCharacter);

    switch (characterClicked) {
      case 'Brute':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[0],
          characterChoosen: true,
        }));
        break;
      case 'Heavy Infantry':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[1],
          characterChoosen: true,
        }));
        break;
      case 'Knight':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[2],
          characterChoosen: true,
        }));
        break;
      case 'Light Infantry':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[3],
          characterChoosen: true,
        }));
        break;
      case 'Pikeman':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[4],
          characterChoosen: true,
        }));
        break;
      case 'Scout':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[5],
          characterChoosen: true,
        }));
        break;
      case 'Spearman':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[6],
          characterChoosen: true,
        }));
        break;
      default:
        break;
    }
  };

  getRandomEnemy = () => {};

  render({ currentCharacter, soldiers, characterChoosen } = this.state) {
    return (
      <main className="character__main">
        <h1 className="character__title">Army Game v1</h1>
        <h2 className="character__sub-title">Choose your soldier</h2>
        {characterChoosen && (
          <>
            <div className="character__options">
              <CharacterList
                variants={this.state}
                handleClick={this.handleCharacterClick}
                characters={soldiers}
              />
            </div>
            <div className="character__character-info">
              <ul>
                <li>Name: {currentCharacter.name}</li>
                <li>
                  {currentCharacter.hp}
                  HP{' '}
                  <span role="img" aria-label="HP">
                    🛡
                  </span>
                </li>
                <li>
                  {currentCharacter.attack}
                  attack{' '}
                  <span role="img" aria-label="Attack">
                    ⚔️
                  </span>
                </li>
                <li>
                  {currentCharacter.accuracy}% Accuracy
                  <span role="img" aria-label="Accuracy">
                    🎯
                  </span>
                </li>
              </ul>
            </div>
          </>
        )}
      </main>
    );
  }
}
export default ChooseCharacter;
