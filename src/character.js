export default class Character {
  constructor(name, cell, attack, stoned = false) {
    this.name = name;
    this.attack = attack;
    this.sStoned = stoned;
    this.cell = cell;
  }

  set stoned(stoned) {
    this.sStoned = stoned;
  }

  get stoned() {
    return this.sStoned;
  }

  set attack(attack) {
    this.aAttack = attack;
  }

  get attack() {
    let damage;
    if (this.cell >= 0 && this.cell <= 10) {
      const percent = 100 - (this.cell * 10) + 10;
      damage = (this.aAttack / 100) * percent;

      if (this.sStoned) {
        damage = Math.round(damage - (Math.log2(this.cell) * 5));
        return damage;
      }
      return damage;
    }
    return 'Ячейка за границами поля';
  }
}
