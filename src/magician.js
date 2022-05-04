import Character from './character';

export default class Magician extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = 'Magician';
  }
}
