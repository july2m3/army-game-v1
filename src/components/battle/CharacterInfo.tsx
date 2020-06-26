import React from 'react';

const CharacterInfo = (props: any) => {
  const { currentCharacter } = props;

  return (
    <div className="character-info">
      <ul>
        <li className="character-info__name">{currentCharacter.name}</li>
        {/* <li className="character-info__hp">
          {currentCharacter.hp}
          HP{' '}
          <span role="img" aria-label="HP">
            🛡
          </span>
        </li> */}
        {/* 
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
        </li> */}
      </ul>
    </div>
  );
};

export default CharacterInfo;
