var Milight = require('node-milight-promise').MilightController;
var commands = require('node-milight-promise').commandsV6;

var light = new Milight({
    ip: "192.168.1.60",
    type: 'v6'
  }),

zone = process.argv[2],
action = process.argv[3];
bright = process.argv[4];

switch (action) {

  case "on":
    light.sendCommands(commands.fullColor.on(zone), commands.fullColor.brightness(zone, bright));
    break;

  case "off":
    light.sendCommands(commands.fullColor.off(zone));
    break;

  case "dim":
    light.sendCommands(commands.fullColor.on(zone), commands.fullColor.brightness(zone, bright));
    break;

  case "night":
    light.sendCommands(commands.fullColor.on(zone), commands.fullColor.brightness(zone, 10));
    break;


}

light.close().then(function () {
  console.log("All command have been executed - closing Milight");
});
console.log("Invocation of asynchronous Milight commands done");