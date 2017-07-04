import {pickPlayer, battleEnemy, startShopBasic, listItemsBasic, arrayItemsBasic,
        battle, findStrength, findHealth, findGold} from './logic';
import {spider, crazedMonkey, giantTreant, shopkeeper} from './enemy-list';

test('pickPlayer() gives the correct character', () => {
  expect(pickPlayer(1)).toEqual("Geoff");
});

test('battleEnemy() initiates the fight between the player and enemy', () => {
  expect(battleEnemy(spider)).toEqual("Your fight against the spider is starting.");
  expect(() => battleEnemy(shopkeeper)).toThrow('Error: That enemy does not exist.');
});

test('startShopBasic() beings the shop system', () => {
  expect(startShopBasic()).toEqual("Welcome to the shop.");
});

test('listItemsBasic() gives a list of items to buy.', () => {
  expect(listItemsBasic()).toEqual("sword");
});

test('arrayItemsBasic() gives an array of items to buy.', () => {
  expect(arrayItemsBasic()).toEqual(["sword" , "shield" , "potion"])
});

test('findStrength()/Health()/Gold() gives the stats of the target wanted.', () => {
  expect(findStrength(spider)).toEqual(1);
  expect(findHealth(crazedMonkey)).toEqual(4);
  expect(findGold(giantTreant)).toEqual(8);
});

test('findStrength() gives the correct value.', () => {
  expect(findStrength(spider)).toEqual(1);
});

test('battle() returns the greater values between the player and enemy.', () => {
  
});
