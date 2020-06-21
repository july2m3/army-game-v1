import React from 'react';

// import { motion } from 'framer-motion';

// import spearmanImage from '../../sprites/spearman.png';
// import bruteImage from '../../sprites/brute.png';
// import heavyInfantryImage from '../../sprites/heavy-infantry.png';
// import knightImage from '../../sprites/knight.png';
// import lightInfantryImage from '../../sprites/light-infantry.png';
// import pikemanImage from '../../sprites/pikeman.png';

import soldierInfo from '../../soldier-info.json';

// import Character from './Character';
import CharacterList from './CharacterList';

interface IProps {}
interface IState {
  currentCharacter: any;
  soldiers: any;
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
    };
  }

  componentDidMount() {
    const { soldiers } = soldierInfo;

    // update all soldiers to include image src
    // soldiers.forEach((soldier: Object, index: number) => {
    //   console.log(soldier, index);
    //   soldier.src = 'paul';
    //   // soldiers[index].src= 'paul';
    // });
    // console.log(soldiers);

    this.setState(() => ({
      soldiers,
    }));

    this.setState((prevState) => ({
      currentCharacter: prevState.soldiers[6],
    }));
  }

  handleCharacterClick = (characterClicked: any) => {
    // console.log(`Character Clicked ${characterClicked}`);
    switch (characterClicked) {
      case 'brute':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[0],
        }));
        break;
      case 'heavy infantry':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[1],
        }));
        break;
      case 'knight':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[2],
        }));
        break;
      case 'light infantry':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[3],
        }));
        break;
      case 'pikeman':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[4],
        }));
        break;
      case 'scout':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[5],
        }));
        break;
      case 'spearman':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[6],
        }));
        break;
      default:
        break;
    }
  };

  render({ currentCharacter } = this.state) {
    return (
      <main className='character__main'>
        <h1 className='character__title'>Army Game v1</h1>
        <h2 className='character__sub-title'>Choose your soldier</h2>
        <div className='character__options'>
          <CharacterList
            variants={this.state}
            handleClick={this.handleCharacterClick}
            characters={this.state.soldiers}
          />
        </div>
        <div className='character__character-info'>
          <ul>
            <li>Name: {currentCharacter.name}</li>
            <li>
              {currentCharacter.hp}
              HP{' '}
              <span role='img' aria-label='HP'>
                🛡
              </span>
            </li>
            <li>
              {currentCharacter.attack}
              attack{' '}
              <span role='img' aria-label='Attack'>
                ⚔️
              </span>
            </li>
            <li>
              {currentCharacter.accuracy}% Accuracy
              <span role='img' aria-label='Accuracy'>
                🎯
              </span>
            </li>
          </ul>
        </div>
      </main>
    );
  }
}
export default ChooseCharacter;
