export class Character {
  constructor(name, charClass, stats, equipped) {
    this.name = name;
    this.charClass = charClass;
    this.stats = stats;
    this.level = 1;
    this.inventory = [];
    this.equipped = equipped;  
  }

  addItem(item) {
    this.inventory.push(item);
  }

  dropItem(item) {
    
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
    this.equipped = {
      wateringCan: [0, 2]
    }
  }
};

export class Rogue{
  constructor() {
    this.name = "Rogue";
    this.stats = {
      strength: 3,
      magic: 3
    };
    this.equipped = {
      spade: [1, 1]
    }
  }
};

