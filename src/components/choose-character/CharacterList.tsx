/* eslint-disable jsx-quotes */
import React from 'react';
import { v4 as uuid } from 'uuid';

import Character from './Character';
// import characters from '../characters';
import characters from '../characters';

const CharacterList = (props: any) => {
  const { variants, handleClick } = props;
  const tempArray = Array.from(Array(characters.length).keys());
  const myArray = tempArray.map((i: any) => (
    <Character
      key={uuid()}
      handleClick={handleClick}
      variants={variants}
      characterImage={characters[i].characterImage}
      currentCharacter={characters[i].name}
    />
  ));

  return <ul>{myArray}</ul>;
};

export default CharacterList;
