import React, { useState, useEffect } from 'react';

import characters from '../characters';
import CharacterInfo from './CharacterInfo';
import Soldier from '../../game-functions/Soldier';
import MyMessage from './MyMessage';

import './style.scss';

const Battle = (props: any) => {
  const { playerInfoFromProps, enemyInfoFromProps } = props;
  const player = playerInfoFromProps;
  const enemey = enemyInfoFromProps;

  if (Object.keys(player).length === 0 || Object.keys(enemy).length === 0) {
    return null;
  }
  // upon init

  // let log = ['Battle Log'];
  const [log, setLog] = useState(['Battle log']);
  const [message, setMessage] = useState("You didn't battle");
  const [turn, setTurn] = useState(1);
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

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalLog, setModalLog] = React.useState(['No battle log']);
  const openModal = () => {
    setIsOpen(true);
  };

  const beginBattle = () => {
    // log = [...log, 'Beginning battle'];
    setLog([...log, 'Beginning battle']);

    while (player.isAlive && enemy.isAlive) {
      // console.log(`Turn ${turn} start.`);
      // log = [...log, `Turn ${turn} start.`];
      setLog([...log, `Turn ${turn} start.`]);

      if (player.isAlive) {
        // log = [...player.attackEnemy(enemy, log)];
        setLog([...player.attackEnemy(enemy, log)]);
      }
      if (enemy.isAlive) {
        // log = [...enemy.attackEnemy(player, log)];
        setLog([...enemy.attackEnemy(player, log)]);
      }

      // log = [...log, `Turn ${turn} end.`];
      setLog([...log, `Turn ${turn} end.`]);
      setTurn(turn + 1);
    }

    // message = player.isAlive ? 'You won!!🎉' : 'Enemy won...';
    setMessage(player.isAlive ? 'You won!!🎉' : 'You noob, you lost 😭');
    setModalLog(log);
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
          logs={modalLog}
        />
      </div>
    </>
  );
};
export default Battle;
