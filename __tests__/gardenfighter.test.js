import { Character } from './../src/Game.js';

describe('Character', () => {

  test('The program should allow the user to name a new character.', () => {
    const character = new Character("Trogdor");
    expect(character.name).toEqual("Trogdor");
  });
});