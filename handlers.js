// handlers.js

function home(vResponse) {
  console.log("Request handler for the 'home' page called.");
  vResponse.writeHead(200, {"Content-Type": "text/html"});
  vResponse.write("<h1>HOME</h1>");
  vResponse.end();
}

function contacts(vResponse) {
  console.log("Request handler 'upload' was called.");
  vResponse.writeHead(200, {"Content-Type": "text/html"});
  vResponse.write("<h1>CONTACTS</h1>");
  vResponse.end();
}

exports.home = home;
exports.contacts = contacts;
