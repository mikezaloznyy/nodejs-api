var express = require('express');
var router = express.Router();
var geoip = require('geoip-lite');
var http = require('http');
var request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
  resp.on('data', function(ip) {
      
    // get lat and lng
    var ip  = '' + ip;
    var geo = geoip.lookup(ip);
    var lat = geo.ll[0];
    var lng = geo.ll[1];
    console.log("Lat: " + lat);
    console.log("Lng: " + lng);
      
    // make the API call
    var url = 'https://sauron.api.influentialdev.com/stream/?lat=' + lat + '&' + 'lng=' + lng;
    request.get(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var data = body;
        // pass images to jade
        res.render('index', { title: 'API Results', data: JSON.parse(data) });
        console.log(data);
      }
    });
  });
});
});

module.exports = router;