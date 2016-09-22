var assert = require( 'assert' );
var Hero = require('../hero');
var Food = require('../food');
var Rat = require('../rat');
var Baddie = require('../baddie');


// describe('hooks', function() {

//   before(function() {
//    var thor = new Hero( "Thor", 100, "Chips" );
//   });

// Create a constructor to create a Hero character.

// A Hero has a name

describe( 'Hero', function(){

  it( 'should create a hero with a name', function(){
    var thor = new Hero( "Thor", 100, "Chips" );
    assert.equal( "Thor", thor.name);

  })
})

// A Hero has health

describe( 'Hero', function(){

it( 'should create a hero with health', function(){
  var thor = new Hero( "Thor", 100, "Chips" );
  assert.equal( 100, thor.health);
})
})


// A Hero has a favourite food

describe( 'Hero', function(){

  it( 'should create a hero with a favourite food', function(){
    var thor = new Hero( "Thor", 100, "Chips" );
    assert.equal( "Chips", thor.favFood);
  })
})

// A Hero can talk saying their name

describe( 'Hero', function(){

it( 'should create a hero who can say their name', function(){
  var thor = new Hero( "Thor", 100, "Chips");
  assert.equal( "My name is Thor", thor.talk());
})
})


// Create a food constructor.
// Food should have a name

describe( 'Food', function(){

  it( 'should create food having a name', function(){
    var cheese = new Food( "cheese", 20);
    assert.equal( "cheese", cheese.name);
  })
})

// Food should have a replenishment value

describe( 'Food', function(){

  it( 'should create food having a replenishment value', function(){
    var cheese = new Food( "cheese", 20);
    assert.equal(20, cheese.replenishmentValue);
  })
})


// A hero should be able to eat food, and health should go up by the replenishment value

// describe( 'Hero', function(){

//   it( 'should be able to eat food', function(){
//     var thor = new Hero( "Thor", 100, "Chips");
//     var cheese = new Food( "cheese", 20);
//     assert.equal("Food eaten: cheese", thor.eat(cheese));

//   })
// })


describe( 'Hero', function(){

  it( 'food eaten increases replenishmentValue', function(){
    var thor = new Hero( "Thor", 100, "Chips");
    var cheese = new Food( "cheese", 20);
    assert.equal(120, thor.eat(cheese));
   
  })
})


// If the food is their favourite food, their health should go up by 1.5 * value.

describe( 'Hero', function(){

  it( 'should increase health by 1.5 * replenishmentValue is favFood', function(){
    var thor = new Hero( "Thor", 100, "Chips");
    var chips = new Food( "Chips", 10);
    assert.equal(115, thor.eat(chips));
  })
})


// Create a Rat constructor
// Rats should be able to touch food, if they do the food becomes poisonous.


describe( 'Food', function(){

it("should become poisonous if touched by a rat", function(){
  var sandwich = new Food( "Sandwich", 15);
  var rat = new Rat();
  assert.equal(-10, rat.touchFood(sandwich));
})

})


// Heroes that eat poisonous food should lose health.

describe( 'Hero', function(){

  it( "should lose health after eating poisonous food", function(){
  var sandwich = new Food( "Sandwich", 15);
  var rat = new Rat();
  var thor = new Hero( "Thor", 100, "Chips");
  rat.touchFood(sandwich);
  thor.eat(sandwich);
  assert.equal(90, thor.health);

  })
})

// extra: can lay rat traps that kill rat

describe( 'Hero', function(){

  it( 'should lay a rat trap that kills the rat', function(){
    var rat = new Rat(50);
    var thor = new Hero( "Thor", 100, "Chips");
    assert.equal("Rat health is 0. Thus, rat is dead.",thor.layRatTrap(rat));

  })
})

// extra: if rat eat's own favFood, health increases by replenishmentValue * 1.5

describe( 'Rat', function(){

  it( 'should have increased health if favFood is eaten', function(){
    var rat = new Rat(50, "cheese");
    var cheese = new Food("cheese", 13);
    rat.eat(cheese);
    assert.equal(76, rat.health);
  })
})


// extra: fight/flight if health is above/below 20

describe( 'Hero', function(){

  it( 'should decide to fight or flight depending on health level', function(){
    var thor = new Hero("Thor", 19, "Chips");
    assert.equal("hero is hiding in the corner", thor.fightOrFlight());
  })
})


// extra: baddie can make rat touch each item of food 

describe ( 'Baddie', function(){

  it( 'should make rat touch each item food', function(){
    foodArray = []
    var cheese = new Food("cheese", 30);
    var tofu = new Food("tofu", 100);
    var chicken = new Food("chicken", 60);
    foodArray.push(cheese);
    foodArray.push(tofu);
    foodArray.push(chicken);

    var baddie = new Baddie("Baddie", "Throwing Rocks");

    var rat = new Rat("Roland", "Sausages");

    assert.equal("Rat has touched cheese. The replishment value thereof has decreased to -10.", "Rat has touched tofu. The replishment value thereof has decreased to -10.", "Rat has touched chicken. The replishment value thereof has decreased to -10.", baddie.makeRatTouchAllFood(rat, foodArray));
  })
})