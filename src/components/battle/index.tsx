import React, { useState } from 'react';

import characters from '../characters';
import CharacterInfo from './CharacterInfo';
import Soldier from '../../game-functions/Soldier';
import MyMessage from './MyMessage';

import './style.scss';

const Battle = (props: any) => {
  const { player, enemy } = props;
  // const playerCharacter = playerInfoFromProps;
  // const enemyCharacter = enemyInfoFromProps;

  const [log, setLog] = useState(['Battle log']);
  const [message, setMessage] = useState("You didn't battle");
  const [turn, setTurn] = useState(1);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalLog, setModalLog] = React.useState(['No battle log']);
  const openModal = () => {
    setIsOpen(true);
  };

  if (
    player === undefined ||
    enemy === undefined ||
    Object.keys(player).length === 0 ||
    Object.keys(enemy).length === 0
  ) {
    return null;
  }

  // upon init
  const playerSoldier = new Soldier(
    player.attack,
    player.hp,
    player.accuracy,
    'Player',
  );
  const enemySoldier = new Soldier(
    enemy.attack,
    enemy.hp,
    enemy.accuracy,
    'Enemy',
  );

  const beginBattle = () => {
    // log = [...log, 'Beginning battle'];
    setLog([...log, 'Beginning battle']);

    while (playerSoldier.isAlive && enemySoldier.isAlive) {
      setLog([...log, `Turn ${turn} start.`]);

      if (playerSoldier.isAlive) {
        setLog([...playerSoldier.attackEnemy(enemySoldier, log)]);
      }
      if (enemySoldier.isAlive) {
        setLog([...enemySoldier.attackEnemy(playerSoldier, log)]);
      }

      setLog([...log, `Turn ${turn} end.`]);
      setTurn(turn + 1);
    }

    setMessage(playerSoldier.isAlive ? 'You won!!🎉' : 'You noob, you lost 😭');
    setModalLog(log);
    openModal();
  };

  const mapNameToImg = () => {
    const playerImage = characters.filter(
      (item: any) => item.name === player.name,
    );
    player.image = playerImage[0].characterImage;

    const enemyImage = characters.filter(
      (item: any) => item.name === enemy.name,
    );
    enemy.image = enemyImage[0].characterImage;
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
          <CharacterInfo currentCharacter={player} />
          <CharacterInfo currentCharacter={enemy} />
        </div>
        <div className="battle__images">
          {player.image && <img src={player.image} alt="none" />}
          {enemy.image && <img src={enemy.image} alt="none" />}
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
