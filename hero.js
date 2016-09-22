var Food = require( './food' );
var Rat = require( './rat');

// Create a constructor to create a Hero character.
// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name


// A hero should be able to eat food, and health should go up by the replenishment value
// If the food is their favourite food, their health should go up by 1.5 * value.




var Hero = function(name, health, favFood){
  this.name = name;
  this.health = health;
  this.favFood = favFood;
 
}

Hero.prototype = {
  talk: function(){
    return ("My name is " + this.name);
  },
  eat: function(food){
    // return("Food eaten: " + food.name);
    if( food.name === this.favFood){
      return this.health += (food.replenishmentValue * 1.5);
    }
    else
     return (this.health += food.replenishmentValue);
  },
  layRatTrap: function(rat){
    rat.health -= rat.health;
    return "Rat health is " + rat.health + ". Thus, rat is dead.";
  },
  fightOrFlight: function(){
    if( this.health < 20){
      return "hero is hiding in the corner";
    }
    else
      return "hero will fight on";
  }
}



module.exports = Hero;
