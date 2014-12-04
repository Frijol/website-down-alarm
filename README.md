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
3. 
