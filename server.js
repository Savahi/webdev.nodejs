// server.js

var vHttp = require("http");
var vUrl = require("url");

function start( router, aHandlers ) {
  function onRequest( vRequest, vResponse ) {
    var sPathName = vUrl.parse(vRequest.url).pathname;
    console.log("Request for " + sPathName + " received.");

    router( aHandlers, sPathName, vResponse );
  }

  vHttp.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
