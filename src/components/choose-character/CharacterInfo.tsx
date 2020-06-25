import React from 'react';

const CharacterInfo = (props: any) => {
  const { currentCharacter } = props;

  return (
    <div className="character__character-info">
      <ul>
        <li>
          Name:
          {currentCharacter.name}
        </li>
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
  );
};

export default CharacterInfo;
