import React from 'react';

import characters from '../characters';
import CharacterInfo from './CharacterInfo';
import './style.scss';

const Battle = (props: any) => {
  const { player, enemy } = props;
  const playerCharacter = player;
  const enemyCharacter = enemy;

  if (Object.keys(player).length === 0 || Object.keys(enemy).length === 0) {
    return null;
  }

  const mapNameToImg = () => {
    const playerImage = characters.filter(
      (item: any) => item.name === player.name,
    );
    playerCharacter.image = playerImage[0].characterImage;

    const enemyImage = characters.filter(
      (item: any) => item.name === enemy.name,
    );
    enemyCharacter.image = enemyImage[0].characterImage;
  };

  mapNameToImg();

  return (
    <>
      <div className="battle">
        <h1 className="battle__title">Fight!!</h1>
        <div className="battle__info">
          <CharacterInfo currentCharacter={playerCharacter} />
          <CharacterInfo currentCharacter={enemyCharacter} />
        </div>
        <div className="battle__images">
          {playerCharacter.image && (
            <img src={playerCharacter.image} alt="none" />
          )}
          {enemyCharacter.image && (
            <img src={enemyCharacter.image} alt="none" />
          )}
        </div>
        <button className="battle__button" type="button">
          Start Round
        </button>
      </div>
    </>
  );
};

export default Battle;
