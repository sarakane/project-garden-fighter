export class Character {
  constructor(name, charClass, stats, inventory, equipped) {
    this.name = name;
    this.charClass = charClass;
    this.stats = stats;
    this.level = 1;
    this.inventory = inventory;
    this.equipped = equipped;  
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
    this.inventory = [];
  };
};

class Wizard {
  constructor() {
    // this.name = "Wizard";
    // this.stats = {
    //   strength: 1,
    //   magic: 5
    // };
    // this.equipped = {
    //   wateringCan: [0, 2]
    // }
    // this.inventory = [];
  }
};

class Rogue{
  constructor() {
    this.name = "Rogue";
    this.stats = {
      strength: 3,
      magic: 3
    };
    this.equipped = {
      spade: [1, 1]
    }
    this.inventory = [];
    }
};