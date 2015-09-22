// index.js

var vServerMod = require("./server");
var vRouterMod = require("./router");
var vHandlersMod = require("./handlers");

var aHandlers = {};
aHandlers["/"] = vHandlersMod.home;
aHandlers["/home"] = vHandlersMod.home;
aHandlers["/contacts"] = vHandlersMod.contacts;

vServerMod.start(vRouterMod.router, aHandlers);
