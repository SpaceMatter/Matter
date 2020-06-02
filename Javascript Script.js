const scientific = new ADNotations.ScientificNotation();
const Game = {
     Matter:{
       amount:new Decimal(10)
     },
     MatterAssemblers:{
       amount:new Decimal(0),
       cost:new Decimal(10),
       mult:new Decimal(1)
     },
     MatterProducents:{
       amount:new Decimal(0),
       cost:new Decimal(1000),
       mult:new Decimal(1)
     },
     MatterFactories:{
       amount:new Decimal(0),
       cost:new Decimal(1000000),
       mult:new Decimal(1)
     },
};

// Updates Counters

function Tick() {
  Game.Matter.amount= Game.Matter.amount.plus(Game.MatterAssemblers.amount.times(Game.MatterAssemblers.mult));
  Game.MatterAssemblers.amount= Game.MatterAssemblers.amount.plus(Game.MatterProducents.amount.times(Game.MatterProducents.mult));
  Game.MatterProducents.amount= Game.MatterProducents.amount.plus(Game.MatterFactories.amount.times(Game.MatterFactories.mult));
  document.getElementById('Matter').innerHTML = scientific.format(Game.Matter.amount,2,0);
  document.getElementById('MatterAssemblerCost').innerHTML = scientific.format(Game.MatterAssemblers.cost,2,0);
  document.getElementById('MatterAssemblers').innerHTML = scientific.format(Game.MatterAssemblers.amount,2,0);
  document.getElementById('MatterAssemblersMult').innerHTML = scientific.format(Game.MatterAssemblers.mult,2,0);
  document.getElementById('MatterProducentCost').innerHTML = scientific.format(Game.MatterProducents.cost,2,0);
  document.getElementById('MatterProducents').innerHTML = scientific.format(Game.MatterProducents.amount,2,0);
  document.getElementById('MatterProducentsMult').innerHTML = scientific.format(Game.MatterProducents.mult,2,0);
  document.getElementById('MatterFactoriesCost').innerHTML = scientific.format(Game.MatterFactories.cost,2,0);
  document.getElementById('MatterFactories').innerHTML = scientific.format(Game.MatterFactories.amount,2,0);
  document.getElementById('MatterFactoriesMult').innerHTML = scientific.format(Game.MatterFactories.mult,2,0);
};
// A lot of functions!
function MatterAssemblerBuy() {
  if (Game.MatterAssemblers.cost.lessThanOrEqualTo(Game.Matter.amount)) {
    Game.Matter.amount = Game.Matter.amount.minus(Game.MatterAssemblers.cost)
    Game.MatterAssemblers.amount = Game.MatterAssemblers.amount.plus(1)
    Game.MatterAssemblers.cost = Game.MatterAssemblers.cost.times(10)
    Game.MatterAssemblers.mult = Game.MatterAssemblers.mult.times(2)
  }
};
function MatterProducentsBuy() {
  if (Game.MatterProducents.cost.lessThanOrEqualTo(Game.Matter.amount)) {
    Game.Matter.amount = Game.Matter.amount.minus(Game.MatterProducents.cost)
    Game.MatterProducents.amount = Game.MatterProducents.amount.plus(1)
    Game.MatterProducents.cost = Game.MatterProducents.cost.times(1000)
    Game.MatterProducents.mult = Game.MatterProducents.mult.times(2)
  }
};
function MatterFactoriesBuy() {
  if (Game.MatterFactories.cost.lessThanOrEqualTo(Game.Matter.amount)) {
    Game.Matter.amount = Game.Matter.amount.minus(Game.MatterFactories.cost)
    Game.MatterFactories.amount = Game.MatterFactories.amount.plus(1)
    Game.MatterFactories.cost = Game.MatterFactories.cost.times(1000000)
    Game.MatterFactories.mult = Game.MatterFactories.mult.times(2)
  }
};
// Updates The Game


window.setInterval(function(){

	Tick();

}, 100);
