// Further. D.

// Create a Rat constructor
// Rats should be able to touch food, if they do the food becomes poisonous.
// Heroes that eat poisonous food should lose health.


var Rat = function(health, favFood){
  this.health = health;
  this.favFood = favFood;
}

Rat.prototype = {
  touchFood: function(food){
    return food.replenishmentValue -= (food.replenishmentValue + 10);
  },
  eat: function(food){
    // return("Food eaten: " + food.name);
    if( food.name === this.favFood){
      return this.health += (food.replenishmentValue * 2);
    }
    else
     return (this.health += food.replenishmentValue);
  },
}






module.exports = Rat;