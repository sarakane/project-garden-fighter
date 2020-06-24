import { Character } from './../src/Game.js';

describe('Character', () => {

  test('The program should allow the user to name a new character.', () => {
    const character = new Character("Trogdor");
    expect(character.name).toEqual("Trogdor");
  });

  test('The program should allow the user to select a class for their character', () => {
    const wizard = new Wizard();
    const character = new Character("Gandalf", wizard.name, wizard.stats, wizard.inventory, wizard.equipped);
    expect(character.charClass).toEqual("Wizard");
  });
})