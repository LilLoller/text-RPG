import {spider, crazedMonkey, giantTreant} from './enemy-list';
const G = "G";

//TODO Change the 'var' to a 'let' and see if it works.
export var playerStats = {
  strength: 5,
  health: 5,
  gold: 0
};

export const findStrength = (target) => {
  return target.strength;
}
export const findHealth = (target) => {
  return target.health;
}
export const findGold = (target) => {
  return target.gold;
}

const shopBasicItems = ["sword" , "shield" , "potion"];

export const pickPlayer = (choice) => {
  if(choice === 1){
    return "Geoff";
  }
  if(choice === 2){
    return "Charles";
  }
  if(choice === 3){
    return "Geoffrey Charles";
  }
}

export const battleEnemy = (enemy) => {
  switch(enemy){
    case spider:
      return "Your fight against the spider is starting.";
      break;
    case crazedMonkey:
      return "Your fight against the crazedMonkey is starting.";
      break;
    case giantTreant:
      return "Your fight against the giantTreant is starting.";
      break;
    default:
      throw new Error('Error: That enemy does not exist.');
  }
}

export const startShopBasic = () => {
  return "Welcome to the shop.";
  return "Would you like something?";
  for(var i = 0; i < startShopBasic.length; i++) {
    return startShopBasic[i];
  }
}

//TODO Make the list say 1: Sword, 2: Shield so that the player can purchase one.
//This function is just a test to see that the items get returned.
export const listItemsBasic = () => {
  for(var i = 0; i < shopBasicItems.length; i++) {
    return shopBasicItems[i];
  }
}

//This function is a test to see that the whole array is returned.
export const arrayItemsBasic = () => {
  return shopBasicItems;
}

export const battle = () => {
  
}
