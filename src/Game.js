export class Character {
  constructor(name, charClass, stats) {
    this.name = name;
    this.charClass = charClass;
    this.stats = stats;
    this.level = 1;
    this.inventory = [];
    this.equipped = [];  
  }

  addItem(item) {
    this.inventory.push(item);
  }

  dropItem(item) {
    const droppedItem = this.inventory.indexOf(item);
    if (droppedItem >= 0) {
    this.inventory.splice(droppedItem, 1);
    }
  }

  equipWeapon(weapon) {
    // this.equipped.push(weapon);
    // this.stats.strength += weapon.strength;
    // this.stats.magic += weapon.magic;
  } 

};

export class Fighter {
  constructor() {
    this.name = "Fighter";
    this.stats = {
      strength: 5,
      magic: 1
    };
    this.equipped = {
      shovel: [2, 0]
    }
  };
};

export class Wizard {
  constructor() {
    this.name = "Wizard";
    this.stats = {
      strength: 1,
      magic: 5
    };
  }
};

export class Rogue{
  constructor() {
    this.name = "Rogue";
    this.stats = {
      strength: 3,
      magic: 3
    };
    this.equipped = [{
      spade: [1, 1]
    }]
  }
};

export class Weapon {
  constructor(name, strength, magic) {
    this.name = name;
    this.strength = strength;
    this.magic = magic;
  }
}

