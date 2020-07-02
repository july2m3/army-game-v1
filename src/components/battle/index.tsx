import React, { useState } from 'react';
import { motion } from 'framer-motion';

import characters from '../characters';
import CharacterInfo from './CharacterInfo';
import Soldier from '../../game-functions/Soldier';
import MyMessage from './MyMessage';

import './style.scss';

const Battle = (props: any) => {
  const { player, enemy } = props;

  const [log, setLog] = useState(['']);
  const [message, setMessage] = useState("You didn't battle");
  const [buttonMessage, setButtonMessage] = useState('Begin Battle');

  const [buttonCanBePressed, setButtonCanBePressed] = useState(true);
  const [playerAttacking, setPlayerAttacking] = useState(false);
  const [enemyAttacking, setEnemyAttacking] = useState(false);
  const [playerHpBar, setPlayerHpBar] = useState(100);
  const [enemyHpBar, setEnemyHpBar] = useState(100);
  const [playerHp, setPlayerHp] = useState(player.hp);
  const [enemyHp, setEnemyHp] = useState(enemy.hp);

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  // player Attack, move player, update hp for soldiers
  const movePlayer = () => {
    setPlayerAttacking(true);
    setTimeout(() => {
      setPlayerAttacking(false);
    }, 600);
  };

  // enemy attack, move enemy, update hp for soldiers
  const moveEnemy = () => {
    setEnemyAttacking(true);
    setTimeout(() => {
      setEnemyAttacking(false);
    }, 600);
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
      // disable button while battle sequence stars
      setButtonCanBePressed(false);
      let currentLog = [...log];

      if (playerSoldier.isAlive) {
        currentLog = [...playerSoldier.attackEnemy(enemySoldier, currentLog)];
      }

      if (enemySoldier.isAlive) {
        currentLog = [...enemySoldier.attackEnemy(playerSoldier, currentLog)];
      }

      currentLog = [...currentLog, `Turn ${buttonMessage} end.`];
      setLog([...currentLog]);

      // battle sequence!!
      movePlayer();
      setEnemyHp(enemySoldier.hp);
      setEnemyHpBar(Math.floor((enemySoldier.hp / enemy.hp) * 100));

      // after player's turn, do enemy's turn
      if (enemySoldier.isAlive) {
        setTimeout(() => {
          moveEnemy();
          setPlayerHp(playerSoldier.hp);
          setPlayerHpBar(Math.floor((playerSoldier.hp / player.hp) * 100));
        }, 600);
      }

      // update battle stats after enemy's turn
      setTimeout(() => {
        // if battle over, display log
        if (!playerSoldier.isAlive || !enemySoldier.isAlive) {
          setButtonMessage('Battle is over!');
          setMessage(playerSoldier.isAlive ? 'You won!!🎉' : 'You lost 😭');
          openModal();
        } else {
          //  otherwise allow battle to continue
          setButtonCanBePressed(true);
        }
      }, 1200);
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
          {player.image && !playerAttacking && (
            <img src={player.image} alt="none" />
          )}
          {player.image && playerAttacking && (
            <motion.img
              initial={{ x: 0, scaleX: -1 }}
              src={player.image}
              alt="none"
              animate={{ x: 400, scaleX: -1 }}
              transition={{ duration: 0.5 }}
            />
          )}

          {enemy.image && !enemyAttacking && (
            <img src={enemy.image} alt="none" />
          )}
          {enemy.image && enemyAttacking && (
            <motion.img
              initial={{ x: 0 }}
              src={enemy.image}
              alt="none"
              animate={{ x: -400 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </div>
        <button
          className="battle__button"
          type="button"
          onClick={beginBattle}
          disabled={!buttonCanBePressed}
        >
          <span className="dragon" role="img" aria-label="dragon">
            🐉
          </span>{' '}
          {buttonMessage}
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
