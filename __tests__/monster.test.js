import { Monster } from './../src/monster.js';

describe('Monster', () => {
  let slug;

  beforeEach(() => {
    slug = new Monster("Slug", 2, 2);
  });

  test('The program should create a monster', () => {
    expect(slug).toMatchObject({monstClass:"Slug", strength:2, magic:2});
  })

})