class Soldier {
  attack: number;
  hp: number;
  accuracy: number;
  isAlive: boolean;
  name: string;

  constructor(attack = 15, hp = 15, accuracy = 100, name = 'Julio') {
    this.name = name;
    this.attack = attack >= 1 ? attack : 1;
    this.hp = hp > 0 ? hp : 1;
    this.accuracy = accuracy < 0 ? 1 : accuracy > 100 ? 100 : accuracy;
    this.isAlive = hp > 0;
  }

  attackEnemy = (enemy: Soldier, previousLog = ['']) => {
    let log = [...previousLog];

    if (this !== enemy) {
      let attackRole = Math.random() * 100;
      if (attackRole <= this.accuracy) {
        enemy.hp -= this.attack;
        console.log(
          `${this.name} hit ${enemy.name}. ${enemy.name} now has ${enemy.hp}hp`,
        );
        log = [
          ...log,
          `${this.name} hit ${enemy.name}. ${enemy.name} now has ${enemy.hp}hp`,
        ];
      } else {
        console.log(`${this.name} missed!`);
        log = [...log, `${this.name} missed!`];
      }

      enemy.isAlive = enemy.hp > 0;

      if (enemy.isAlive) {
        attackRole = Math.random() * 100;
        if (attackRole <= enemy.accuracy) {
          this.hp -= enemy.attack;
          console.log(
            `${enemy.name} hit ${this.name}. ${this.name} now has ${this.hp}hp`,
          );
          log = [
            ...log,
            `${enemy.name} hit ${this.name}. ${this.name} now has ${this.hp}hp`,
          ];
        } else {
          console.log(`${enemy.name} missed!`);
          log = [...log, `${enemy.name} missed!`];
        }
      }

      this.isAlive = this.hp > 0;
    }

    return log;
  };
}

export default Soldier;
