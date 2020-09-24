const scientific = new ADNotations.ScientificNotation();
const Game = {
     Matter:{
       amount:new Decimal(10),
       Pr_amount:new Decimal(10),
       Autobuy:false,
     },
     MatterAssemblers:{
       amount:new Decimal(0),
       cost:new Decimal(10),
       multi:new Decimal(1)
     },
     MatterProducents:{
       amount:new Decimal(0),
       cost:new Decimal(1000),
       multi:new Decimal(1)
     },
     MatterFactories:{
       amount:new Decimal(0),
       cost:new Decimal(1000000),
       multi:new Decimal(1)
     },
     Energy:{
       amount:new Decimal(1),
       mult_get:new Decimal(1),
       amount_get:new Decimal(0),
       pow_mult:new Decimal(2)
     },
};

// Updates Counters

function Tick() {
  Game.Matter.amount= Game.Matter.amount.plus(Game.MatterAssemblers.amount.times(Game.MatterAssemblers.multi.times(Game.Energy.mult_get.times(Game.Energy.amount))));
  Game.MatterAssemblers.amount= Game.MatterAssemblers.amount.plus(Game.MatterProducents.amount.times(Game.MatterProducents.multi.times(Game.Energy.mult_get.times(Game.Energy.amount))));
  Game.MatterProducents.amount= Game.MatterProducents.amount.plus(Game.MatterFactories.amount.times(Game.MatterFactories.multi.times(Game.Energy.mult_get.times(Game.Energy.amount))));
  Game.Energy.amount_get=  Game.Energy.pow_mult.pow_base(Game.Matter.amount.log10());
  document.getElementById('Matter').innerHTML = scientific.format(Game.Matter.amount,2,0);
  document.getElementById('MatterAssemblerCost').innerHTML = scientific.format(Game.MatterAssemblers.cost,2,0);
  document.getElementById('MatterAssemblers').innerHTML = scientific.format(Game.MatterAssemblers.amount,2,0);
  document.getElementById('MatterAssemblersMult').innerHTML = scientific.format(Game.MatterAssemblers.multi,2,0);
  document.getElementById('MatterProducentCost').innerHTML = scientific.format(Game.MatterProducents.cost,2,0);
  document.getElementById('MatterProducents').innerHTML = scientific.format(Game.MatterProducents.amount,2,0);
  document.getElementById('MatterProducentsMult').innerHTML = scientific.format(Game.MatterProducents.multi,2,0);
  document.getElementById('MatterFactoriesCost').innerHTML = scientific.format(Game.MatterFactories.cost,2,0);
  document.getElementById('MatterFactories').innerHTML = scientific.format(Game.MatterFactories.amount,2,0);
  document.getElementById('MatterFactoriesMult').innerHTML = scientific.format(Game.MatterFactories.multi,2,0);
  document.getElementById('prestige').innerHTML = "Prestige For... " + scientific.format(Game.Energy.amount_get,2,0) + " Energy";
  if (Game.Matter.Autobuy == true) {
    Game.MatterAssemblers.multi = Game.MatterAssemblers.multi.times(Game.Energy.amount.log10())
    Game.MatterProducents.multi = Game.MatterProducents.multi.times(Game.Energy.amount.log10())
    Game.MatterFactories.multi = Game.MatterFactories.multi.times(Game.Energy.amount.log10())
  }
};
// A lot of functions!
function MatterAssemblerBuy() {
  if (Game.MatterAssemblers.cost.lessThanOrEqualTo(Game.Matter.amount)) {
    Game.Matter.amount = Game.Matter.amount.minus(Game.MatterAssemblers.cost)
    Game.MatterAssemblers.amount = Game.MatterAssemblers.amount.plus(1)
    Game.MatterAssemblers.cost = Game.MatterAssemblers.cost.times(10)
    Game.MatterAssemblers.multi = Game.MatterAssemblers.multi.times(2)
  }
};
function MatterProducentsBuy() {
  if (Game.MatterProducents.cost.lessThanOrEqualTo(Game.Matter.amount)) {
    Game.Matter.amount = Game.Matter.amount.minus(Game.MatterProducents.cost)
    Game.MatterProducents.amount = Game.MatterProducents.amount.plus(1)
    Game.MatterProducents.cost = Game.MatterProducents.cost.times(1000)
    Game.MatterProducents.multi = Game.MatterProducents.multi.times(2)
  }
};
function MatterFactoriesBuy() {
  if (Game.MatterFactories.cost.lessThanOrEqualTo(Game.Matter.amount)) {
    Game.Matter.amount = Game.Matter.amount.minus(Game.MatterFactories.cost)
    Game.MatterFactories.amount = Game.MatterFactories.amount.plus(1)
    Game.MatterFactories.cost = Game.MatterFactories.cost.times(1000000)
    Game.MatterFactories.multi = Game.MatterFactories.multi.times(2)
  }
};
function PrestigeEnergy() {
  Game.Matter.amount=Game.Matter.Pr_amount
  Game.MatterAssemblers.cost=Game.Matter.Pr_amount
  Game.MatterAssemblers.amount=Game.Matter.Pr_amount.minus(10)
  Game.MatterAssemblers.multi=Game.Matter.Pr_amount.minus(9)
  Game.MatterProducents.cost=Game.Matter.Pr_amount.plus(90)
  Game.MatterProducents.amount=Game.Matter.Pr_amount.minus(10)
  Game.MatterProducents.multi=Game.Matter.Pr_amount.minus(9)
  Game.MatterFactories.cost=Game.Matter.Pr_amount.plus(999990)
  Game.MatterFactories.amount=Game.Matter.Pr_amount.minus(10)
  Game.MatterFactories.multi=Game.Matter.Pr_amount.minus(9)
  Game.Energy.amount=Game.Energy.amount.plus(Game.Energy.amount_get)
  Game.Energy.amount_get=Game.Matter.Pr_amount.minus(10)
};
function ShowMatter() {
  document.getElementById('MatterPage').style.display = 'block';
  document.getElementById('EnergyPage').style.display = 'none';
  document.getElementById('InfoPage').style.display = 'none';
  }
function ShowEnergy() {
  document.getElementById('MatterPage').style.display = 'none';
  document.getElementById('EnergyPage').style.display = 'block';
  document.getElementById('InfoPage').style.display = 'none';
}
function ShowInfo() {
  document.getElementById('MatterPage').style.display = 'none';
  document.getElementById('EnergyPage').style.display = 'none';
  document.getElementById('InfoPage').style.display = 'block';
}
function AutobuyBuy() {
  if (Game.Matter.amount.lessThanOrEqualTo(1e30)) {

  }
  else {
    Game.Matter.Autobuy = true
  }
}
// Updates The Game


window.setInterval(function(){

	Tick();

}, 100);
