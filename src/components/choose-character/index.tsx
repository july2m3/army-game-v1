import React from 'react';

import soldierInfo from '../../soldier-info.json';
import CharacterList from './CharacterList';
import CharacterInfo from './CharacterInfo';

import './style.scss';

interface IProps {
  handlePlayerChoice: any;
}
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
      characterChoosen: false,
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
      // enemyCharacter: prevState.soldiers[0], //0 is against brute
    }));
  }

  handleCharacterClick = (characterClicked: any) => {
    switch (characterClicked) {
      case 'Brute':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[0],
        }));
        break;
      case 'Heavy Infantry':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[1],
        }));
        break;
      case 'Knight':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[2],
        }));
        break;
      case 'Light Infantry':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[3],
        }));
        break;
      case 'Pikeman':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[4],
        }));
        break;
      case 'Scout':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[5],
        }));
        break;
      case 'Spearman':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[6],
        }));
        break;
      case 'Assassin':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[7],
        }));
        break;
      case 'Archer':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[8],
        }));
        break;
      default:
        break;
    }
  };

  handleSelectCharacter = () => {
    const { currentCharacter, enemyCharacter } = this.state;
    const { handlePlayerChoice } = this.props;
    handlePlayerChoice(currentCharacter, enemyCharacter);
    this.setState(() => ({ characterChoosen: true }));
  };

  render({ currentCharacter, soldiers, characterChoosen } = this.state) {
    if (characterChoosen) {
      return null;
    }

    return (
      <main className="character">
        <h1 className="character__title">Army Game v1</h1>
        <h2 className="character__sub-title">Choose your soldier</h2>
        <div className="character__options">
          <CharacterList
            variants={this.state}
            handleClick={this.handleCharacterClick}
            characters={soldiers}
          />
        </div>
        <CharacterInfo currentCharacter={currentCharacter} />
        <button
          type="button"
          className="character__select-character"
          onClick={this.handleSelectCharacter}
        >
          Choose Character
        </button>
      </main>
    );
  }
}
export default ChooseCharacter;
