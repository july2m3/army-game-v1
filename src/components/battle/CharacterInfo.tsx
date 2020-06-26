import React from 'react';

const CharacterInfo = (props: any) => {
  const { currentCharacter } = props;

  return (
    <div className="character-info">
      {/* <span className="character-info__hp"></span> */}
      <p className="character-info__name">{currentCharacter.name}</p>
    </div>
  );
};

export default CharacterInfo;
