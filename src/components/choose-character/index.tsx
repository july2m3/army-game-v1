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
  }

  handleCharacterClick = (characterClicked: any) => {
    switch (characterClicked) {
      case 'brute':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[0],
          characterChoosen: true,
        }));
        break;
      case 'heavy infantry':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[1],
          characterChoosen: true,
        }));
        break;
      case 'knight':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[2],
          characterChoosen: true,
        }));
        break;
      case 'light infantry':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[3],
          characterChoosen: true,
        }));
        break;
      case 'pikeman':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[4],
          characterChoosen: true,
        }));
        break;
      case 'scout':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[5],
          characterChoosen: true,
        }));
        break;
      case 'spearman':
        this.setState((prevState) => ({
          currentCharacter: prevState.soldiers[6],
          characterChoosen: true,
        }));
        break;
      default:
        break;
    }
  };

  render({ currentCharacter, soldiers, characterChoosen } = this.state) {
    return (
      <main className='character__main'>
        <h1 className='character__title'>Army Game v1</h1>
        <h2 className='character__sub-title'>Choose your soldier</h2>
        {!characterChoosen && (
          <>
            <div className='character__options'>
              <CharacterList
                variants={this.state}
                handleClick={this.handleCharacterClick}
                characters={soldiers}
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
          </>
        )}
      </main>
    );
  }
}
export default ChooseCharacter;
