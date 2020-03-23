var Matter = 20
var MatterProducentCost = 1000
var MatterProducents = 0
var MatterAssemblers = 0
var MatterAssemblerCost = 20
function Tick() {
document.getElementById('MatterAssemblerCost').innerHTML = MatterAssemblerCost
document.getElementById('MatterAssemblers').innerHTML = MatterAssemblers
document.getElementById('MatterProducents').innerHTML = MatterProducents
document.getElementById('MatterProducentCost').innerHTML = MatterProducentCost
document.getElementById("MatterCount").innerHTML = Matter
}
function Matterclick(number) {
  Matter = Matter + number;
};
function buyMatterAssembler() {
if (Matter >= MatterAssemblerCost) {
  MatterAssemblers = MatterAssemblers + 1
  Matter = Matter - MatterAssemblerCost
  MatterAssemblerCost = MatterAssemblerCost * 2
}
}
function buyMatterProducent() {
  if (Matter >= MatterProducentCost) {
    MatterProducents = MatterProducents + 1
    Matter = Matter - MatterProducentCost
    MatterProducentCost = MatterProducentCost * 10
  }

}
window.setInterval(function(){
Matterclick(MatterAssemblers)
MatterAssemblers = MatterAssemblers + MatterProducents
Tick()
}, 100);

