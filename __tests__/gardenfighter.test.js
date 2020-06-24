import { Character, Wizard, Fighter, Rogue, Weapon } from './../src/Game.js';
describe('Character', () => {
  let wizard;
  let character;
  let wateringCan;

  beforeEach(() => {
    wizard = new Wizard();
    wateringCan = new Weapon("Watering Can", 0, 5);
    character = new Character("Gandalf", wizard.name, wizard.stats);
  });

  test('The program should allow the user to name a new character.', () => {
    expect(character.name).toEqual("Gandalf");
  });

  test('The program should allow the user to select a class for their character', () => {
    expect(character.charClass).toEqual("Wizard");
  });

  test('The program should allow the user to store items in their inventory', () => {
    character.addItem("slug potion");
    expect(character.inventory).toContain("slug potion");
  });

  test('The program should allow the user to drop items from their inventory', () => {
    character.addItem("flower seeds");
    character.addItem("slug potion");
    character.addItem("soil");
    character.dropItem("slug potion");
    expect(character.inventory).toEqual(expect.not.arrayContaining(["slug potion"]));
  });

  test('The program should allow the user to equip an item from their inventory', () => {
    character.equipWeapon(wateringCan);
    expect(character.equipped).toContain(wateringCan);
  });
})