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
  });

  test('The program should give a new character a starting weapon based on the characters class', () => {
    game.giveCharacterStartingWeapon();
    expect(game.character.equipped).toEqual(expect.arrayContaining([{name: "Shovel", strength: 5, magic: 0}]));
  });
});