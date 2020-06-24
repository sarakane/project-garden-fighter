export class Character {
  constructor(name) {
    this.name = "";
/*     this.charClass = charClass;
    this.stats = stats;
    this.level = 1;
    this.inventory = inventory;
    this.equipped = equipped;  */
  }

};

class Fighter {
  constructor() {
    this.name = "Fighter";
    this.stats = {
      strength: 5,
      magic: 1
    };
    this.equipped = {
      shovel: [2, 0]
    }
  }
};

let fighter = new Fighter();
let character = new Character(name, fighter.name, fighter.stats )