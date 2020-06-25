import React from 'react';

import soldierInfo from '../../soldier-info.json';
import CharacterList from './CharacterList';
import CharacterInfo from './CharacterInfo';

import './style.scss';

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
    // e.preventDefault();

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
      case 'Assassin':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[7],
          characterChoosen: true,
        }));
        break;
      case 'Archer':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[8],
          characterChoosen: true,
        }));
        break;
      default:
        break;
    }
  };

  getRandomEnemy = () => {
    // let randomEnemyNumber = 2;
  };

  ddd = (e: any) => {
    const { currentCharacter, enemyCharacter } = this.state;
    // e.preventDefault();
    console.log(
      `Right now, The battle rages on between ${currentCharacter.name} and ${enemyCharacter.name} `,
    );
  };

  render({ currentCharacter, soldiers, characterChoosen } = this.state) {
    return (
      <main className="character">
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
            <CharacterInfo currentCharacter={currentCharacter} />
          </>
        )}
        <button
          type="button"
          className="character__select-character"
          onClick={this.ddd}
        >
          Hello
        </button>
      </main>
    );
  }
}
export default ChooseCharacter;
