import React from 'react';

import characters from '../characters';
import CharacterInfo from './CharacterInfo';
import Soldier from '../../game-functions/Soldier';
import MyMessage from './MyMessage';

import './style.scss';

const Battle = (props: any) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const { player, enemy } = props;
  const playerCharacter = player;
  const enemyCharacter = enemy;
  let message = 'You lost...';

  if (Object.keys(player).length === 0 || Object.keys(enemy).length === 0) {
    return null;
  }

  const beginBattle = () => {
    console.log('beginning battle');

    const player = new Soldier(
      playerCharacter.attack,
      playerCharacter.hp,
      playerCharacter.accuracy,
      'Player',
    );

    const enemy = new Soldier(
      enemyCharacter.attack,
      enemyCharacter.hp,
      enemyCharacter.accuracy,
      'Enemy',
    );

    let turn = 1;

    while (player.isAlive && enemy.isAlive) {
      console.log(`Turn ${turn} start.`);
      if (player.isAlive) {
        player.attackEnemy(enemy);
      }
      if (enemy.isAlive) {
        enemy.attackEnemy(player);
      }
      console.log(`Turn ${turn} end.`);
      turn++;
    }

    message = player.isAlive ? 'You won!!🎉' : 'Enemy won...';
    console.log(message);
    openModal();
  };

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

  const closeModal = () => {
    setIsOpen(false);
  };

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
        <button className="battle__button" type="button" onClick={beginBattle}>
          Start Round
        </button>

        <MyMessage
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          message={message}
        />
      </div>
    </>
  );
};
export default Battle;
