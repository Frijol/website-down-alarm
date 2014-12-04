// SET THESE VARIABLES
var siteToMonitor = 'http://www.google.com';
var wifiSettings = {
  ssid: "technicallyWifi", // Your wifi network
  password: "scriptstick", // Your wifi password
  timeout: 40
};

// Require node libraries
var tessel = require('tessel');
var relaylib = require('relay-mono');
var wifi = require('wifi-cc3000');
var http = require('http');

// Local vars
var timeouts = 0; // Counts wifi timeouts

// Connect hardware
var relay = relaylib.use(tessel.port['A']);
relay.on('ready', function relayReady () {
  // Connect wifi
  checkConnection();
});

// Main function: runs when everything is ready
function main() {
  console.log('Ready! Pinging website...');
  // Check status of website
  setInterval(function checkSite() {
    http.get(siteToMonitor, function(res) {
      console.log("Got response: " + res.statusCode);
      // Check for bad status
      if(res.statusCode == 200) {
        relay.turnOff(1, function (err) {
          if(err) {
            console.log(err);
            systemError();
          }
        });
      } else {
        relay.turnOn(1, function (err) {
          if(err) {
            console.log(err);
            systemError();
          }
        });
      }
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
      systemError();
    });
  }, 2000); // Every 10 seconds
}

function checkConnection () {
  if (wifi.isConnected()) {
    console.log('Connected.');
    // When wifi is connected, run the main function
    main();
  } else {
    console.log('Connecting...');
    wifi.connect(wifiSettings, function (err, res) {
      if(err) {
        console.log('Error connecting:', err);
        systemError();
      }
      // Try again
      checkConnection();
    });
  }
}

// Automatic wifi handling
wifi.on('disconnect', function () {
  console.log('Disconnected.');
  systemError();
  checkConnection();
});

wifi.on('timeout', function(err){
  // Tried to connect but couldn't; retry
  console.log("Timed out connecting to wifi");
  timeouts++;
  if (timeouts > 2) {
    // Reset the wifi chip if we've timed out too many times
    powerCycle();
  } else {
    // Try to reconnect
    checkConnection();
  }
});

wifi.on('error', function(err){
  // One of the following happened
  // 1. tried to disconnect while not connected
  // 2. tried to disconnect while in the middle of trying to connect
  // 3. tried to initialize a connection without first waiting for a timeout or a disconnect
  console.log("error emitted", err);
  systemError();
});

// Reset the wifi chip progammatically
function powerCycle(){
  // When the wifi chip resets, it will automatically try to reconnect to the last saved network
  console.log('Cycling power...');
  wifi.reset(function(){
    timeouts = 0; // Reset timeouts
    console.log("Done power cycling, waiting to reconnect...");
    // Give it some time to auto reconnect
    setTimeout(function(){
      if (!wifi.isConnected()) {
        // Try to reconnect
        connect();
      }
      }, 20 *1000); // 20 second wait
  });
}

// Whenever this system isn't working, flash the light
function systemError() {
  relay.toggle(1);
  setTimeout(function () {
    relay.toggle(1);
  }, 2000);
}
