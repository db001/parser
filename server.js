var http = require('http');

var port = process.env.PORT || 3000;

var obj = {};

var server = http.createServer(function(req, res) {
    var header = req.headers;
    var os = header["user-agent"];
    os = /\(([^)]+)\)/.exec(os);
    obj["Operating Sysytem"] = os[1];
    var lang = header["accept-language"].split(",");
    obj["Language"] = lang[0];
    obj["IP"] = header["x-forwarded-for"];
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(obj));
});

server.listen(port, function(){
    console.log("Server listening");
})