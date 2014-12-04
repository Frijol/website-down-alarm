website-down-alarm
==================

Pings a URL and causes an alarm light to run continuously if the status code is not 200.

## Light patterns

* Continuously off: all is well
* Continuously on: website being monitored is down
* Two-second bursts (on or off): system error; monitoring isn't working (reset the Tessel)

## Materials

## Setting up the hardware

1. Unscrew the switch from the lamp cord
2. Peel back the cut ends and use the wire strippers to expose the copper
3. Using a screwdriver to press down on the tabs, insert the exposed copper into Relay 1 on the Relay Module
4. Plug the Relay Module into Port A on the Tessel
5. Plug in power to the lights
6. USB power the Tessel (plug it in to your computer to program)

## To run

1. Clone this repo
2. `npm install` to install dependencies
3. Ensure your hardware is set up properly by running `tessel run relay-test.js`. If nothing happens, check your connections and refer to the [Relay Guide](http://start.tessel.io/modules/relay)
4. In `index.js`, change the wifi settings and site to monitor to suit your needs
5. To run temporarily with logs, `tessel run index.js`
6. To program for long-term use, `tessel push index.js`
7. You can now unplug Tessel from your computer and power externally according to the [guide](https://tessel.io/docs/untethered)
