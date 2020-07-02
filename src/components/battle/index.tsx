import React, { useState } from 'react';

import characters from '../characters';
import CharacterInfo from './CharacterInfo';
import Soldier from '../../game-functions/Soldier';
import MyMessage from './MyMessage';

import './style.scss';

const Battle = (props: any) => {
  const { player, enemy } = props;

  const [log, setLog] = useState(['Battle log']);
  const [message, setMessage] = useState("You didn't battle");
  const [turn, setTurn] = useState(1);

  const [playerHpBar, setPlayerHpBar] = useState(100);
  const [enemyHpBar, setEnemyHpBar] = useState(100);
  const [playerHp, setPlayerHp] = useState(player.hp);
  const [enemyHp, setEnemyHp] = useState(enemy.hp);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalLog, setModalLog] = useState(['No battle log']);
  const openModal = () => {
    setIsOpen(true);
  };

  const beginBattle = () => {
    const playerSoldier = new Soldier(
      player.attack,
      playerHp,
      player.accuracy,
      'Player',
    );
    const enemySoldier = new Soldier(
      enemy.attack,
      enemyHp,
      enemy.accuracy,
      'Enemy',
    );

    if (playerSoldier.isAlive && enemySoldier.isAlive) {
      let currentLog = [...log];

      if (playerSoldier.isAlive) {
        currentLog = [...playerSoldier.attackEnemy(enemySoldier, currentLog)];
      }
      if (enemySoldier.isAlive) {
        currentLog = [...enemySoldier.attackEnemy(playerSoldier, currentLog)];
      }

      setPlayerHpBar(Math.floor((playerSoldier.hp / player.hp) * 100));
      setEnemyHpBar(Math.floor((enemySoldier.hp / enemy.hp) * 100));

      currentLog = [...currentLog, `Turn ${turn} end.`];
      setLog([...currentLog]);
      setTurn(turn + 1);
      setPlayerHp(playerSoldier.hp);
      setEnemyHp(enemySoldier.hp);

      if (!playerSoldier.isAlive || !enemySoldier.isAlive) {
        setMessage(
          playerSoldier.isAlive ? 'You won!!🎉' : 'You noob, you lost 😭',
        );
        setModalLog(log);
        openModal();
      }
    }
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

  const closeModal = () => {
    setIsOpen(false);
  };

  mapNameToImg();

  return (
    <>
      <style>
        {`
            :root {
              --playerHpBar: ${playerHpBar}%;
              --enemyHpBar: ${enemyHpBar}%;
              }
            `}
      </style>
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
          <span className="dragon" role="img" aria-label="dragon">
            🐉
          </span>{' '}
          Start Round {turn}
        </button>

        <MyMessage
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          message={message}
          logs={log}
        />
      </div>
    </>
  );
};
export default Battle;
