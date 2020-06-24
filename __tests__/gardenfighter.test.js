import { Character, Wizard, Fighter, Rogue } from './../src/Game.js';
describe('Character', () => {
  let wizard;
  let character;

  beforeEach(() => {
    wizard = new Wizard();
    character = new Character("Gandalf", wizard.name, wizard.stats, wizard.equipped);
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
    character.addItem("slug potion");
    character.dropItem("slug potion");
    expect(character.inventory).toEqual(expect.not.arrayContaining(["slug potion"]));
    console.log(character);
  });
})