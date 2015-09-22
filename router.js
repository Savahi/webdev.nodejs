// router.js

function router( aHandlers, sPathName, vResponse ) {
  console.log("About to route a request for " + sPathName);

  if (typeof aHandlers[sPathName] === 'function') {
    aHandlers[sPathName]( vResponse );
  } else {
    console.log("No request handler found for " + sPathName);
    vResponse.writeHead(200, {"Content-Type": "text/html"});
    vResponse.write("<h1 align=center>Page not found</h1><h6 align=center><a href='/'>[ goto main page ]</a></h6>");
    vResponse.end();
  }

}

exports.router = router;
