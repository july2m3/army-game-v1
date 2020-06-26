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
    this.isAlive = true;
  }

  attackEnemy = (enemy: Soldier) => {
    if (this !== enemy) {
      enemy.hp -= this.attack;
      enemy.isAlive = enemy.hp >= 0 ? true : false;
      if (enemy.isAlive) {
        this.hp -= enemy.attack;
      }
      this.isAlive = this.hp >= 0 ? true : false;
    }
  };
}

export default Soldier;
