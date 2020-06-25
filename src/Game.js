import { Character } from "./Character";
import { Weapon } from "./Weapon";

export class Game {
  constructor (character) {
    this.character = character;
  }
  giveCharacterStartingWeapon() {
    if(this.character.charClass === "Fighter"){
      let shovel = new Weapon("shovel", 5, 0);
      this.character.addItem(shovel);
      this.character.equipItem(shovel);
    } else if (this.character.charClass === "Wizard") {
      let wateringCan = new Weapon("Watering Can", 0, 5);
      this.character.addItem(wateringCan);
      this.character.equipItem(wateringCan);
    } else if (this.character.charClass === "Rogue") {
      let spade = new Weapon("Spade", 3, 3);
      this.character.addItem(spade);
      this.character.equipItem(spade);
    }
  }
};
