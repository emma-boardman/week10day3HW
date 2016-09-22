var Food = require( './food');
var Rat = require( './rat');

// baddie can make the rat touch all food

var Baddie = function(name, superpower){
  this.name = name;
  this.superpower = superpower;
}

Baddie.prototype = {
  makeRatTouchAllFood: function(rat, foodArray){
    for (food of foodArray){ 
      rat.touchFood(food);
      return ("Rat has touched " + food ". The replishment value thereof has decreased to " + 
        food.replenishmentValue);
    }

    }
  }


module.exports = Rat;