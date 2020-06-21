import React from 'react';
import Character from './Character';

import spearmanImage from '../../sprites/spearman.png';
import bruteImage from '../../sprites/brute.png';
import heavyInfantryImage from '../../sprites/heavy-infantry.png';
import knightImage from '../../sprites/knight.png';
import lightInfantryImage from '../../sprites/light-infantry.png';
import pikemanImage from '../../sprites/pikeman.png';

const CharacterList = (props: any) => {
  const { variants, handleClick } = props;
  return (
    <>
      <Character
        handleClick={handleClick}
        ariants={variants}
        characterImage={spearmanImage}
        currentCharacter={'spearman'}
      />
      <Character
        handleClick={handleClick}
        variants={variants}
        characterImage={bruteImage}
        currentCharacter={'brute'}
      />
      <Character
        handleClick={handleClick}
        variants={variants}
        characterImage={heavyInfantryImage}
        currentCharacter={'heavy infantry'}
      />
      <Character
        handleClick={handleClick}
        variants={variants}
        characterImage={lightInfantryImage}
        currentCharacter={'light infantry'}
      />
      <Character
        handleClick={handleClick}
        variants={variants}
        characterImage={knightImage}
        currentCharacter={'knight'}
      />
      <Character
        handleClick={handleClick}
        variants={variants}
        characterImage={pikemanImage}
        currentCharacter={'pikeman'}
      />
    </>
  );
};

export default CharacterList;
