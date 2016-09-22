var Food = require( './food' );

// Create a food constructor.
// Food should have a name
// Food should have a replenishment value

var Food = function(name, replenishmentValue){
  this.name = name;
  this.replenishmentValue = replenishmentValue;
}


module.exports = Food;