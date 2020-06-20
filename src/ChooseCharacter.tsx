import React from 'react';

import { motion } from 'framer-motion';

import spearmanImage from './sprites/spearman.png';
import bruteImage from './sprites/brute.png';
import heavyInfantryImage from './sprites/heavy-infantry.png';
import knightImage from './sprites/knight.png';
import lightInfantryImage from './sprites/light-infantry.png';
import pikemanImage from './sprites/pikeman.png';

import soldierInfo from './soldier-info.json';

interface IProps {}
interface IState {
  currentCharacter: any;
  soldiers: any;
}

class SelectCharacter extends React.Component<IProps, IState> {
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
    // const soldiers = Object.create(soldierInfo);
    const soldiers = soldierInfo;

    // for (const [key: any, value: any] of Object.entries(soldiers)) {
    // console.log(key, value);
    // soldiers.soldiers[key].src = this.linkSoldierNameToImg(soldiers.name);
    // }

    // console.log(soldiers);
    // soldiers.soldiers[0].src = 'hell';

    this.setState(() => ({
      soldiers,
    }));

    this.setState((prevState) => ({
      currentCharacter: prevState.soldiers.soldiers[6],
    }));
  }

  linkSoldierNameToImg = (name: any) => {
    return spearmanImage;
  };

  render({ currentCharacter } = this.state) {
    return (
      <main className='select-character__main'>
        <h1 className='select-character__title'>Army Game v1</h1>
        <h2 className='select-character__sub-title'>Choose your soldier</h2>
        <div className='select-character__options'>
          <p className='select-character__left'>
            <span role='img' aria-label='left arrow'>
              ⬅️
            </span>
          </p>
          <motion.img
            whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
            src={spearmanImage}
            alt='none'
            animate='visible'
            initial='hidden'
            variants={this.variants}
          />
          <p className='select-character__right'>
            <span role='img' aria-label='right arrow'>
              ➡️
            </span>
          </p>
        </div>
        <div className='select-character__character-info'>
          <ul>
            <li>Name: {currentCharacter.name}</li>
            <li>{currentCharacter.hp} HP 🛡</li>
            <li>{currentCharacter.attack} attack ⚔️</li>
            <li>{currentCharacter.accuracy}% Accuracy 🎯</li>
          </ul>
        </div>
      </main>
    );
  }
}
export default SelectCharacter;
