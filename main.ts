var ia1 = new RandomIA();
var ia2 = new RandomIA();

var sim = new Simulator(ia1, ia2);
sim.debug = true;

sim.fight();

sim.history1