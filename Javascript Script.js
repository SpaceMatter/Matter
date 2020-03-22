var MatterAssemblerCost = 20
var MatterAssemblers = 0;
var Matter = 20;
function Matterclick(number) {
  Matter = Matter + number;
  document.getElementById("MatterCount").innerHTML = Matter;
};
function buyMatterAssembler() {
if (Matter >= MatterAssemblerCost) {
  MatterAssemblers = MatterAssemblers + 1
  Matter = Matter - MatterAssemblerCost
  MatterAssemblerCost = MatterAssemblerCost * 2
  document.getElementById('MatterAssemblerCost').innerHTML = MatterAssemblerCost
  document.getElementById('MatterAssemblers').innerHTML = MatterAssemblers
  document.getElementById("MatterCount").innerHTML = Matter
}
}
window.setInterval(function(){
Matterclick(MatterAssemblers)
}, 100);
