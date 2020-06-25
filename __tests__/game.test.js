import { Game } from './../src/Game.js';
import { Character } from './../src/Character.js';
import { Weapon } from './../src/Weapon.js';

describe ('Game', () => {
  let fighter;
  let game;
  beforeEach(() => {
    fighter = new Character("Trogdor", "Fighter", 5, 1, 20);
    game = new Game(fighter);
  });

  test('The program should create a new game with a new character based on the name and character class chosen by the user', () => {
    expect(game.character.charClass).toEqual("Fighter");
    console.log(game);
  });
});