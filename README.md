website-down-alarm
==================

This Tessel project pings a URL and causes an alarm light to run continuously if the status code is not 200.

**If your website goes down, you want to be the first to know.**
Make it obvious when there's a problem by hooking up a big alarm light to a Tessel, which will ping your website every few seconds to check for trouble.

## Light patterns

* Continuously off: all is well
* Continuously on: website being monitored is down
* Two-second bursts (on or off): system error; monitoring isn't working (reset the Tessel)

## Materials

* [Tessel](//tessel.io)
* [Relay Module](//tessel.io/modules#module-relay)
* [Alarm light](http://www.amazon.com/gp/product/B00EPP56GY/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1)

![](https://lh5.googleusercontent.com/-eRv927oK4XQ/VIDmC4cql_I/AAAAAAAALUw/P-J2lKn2FX8/w828-h466-no/20141204_095736.jpg)

## Tools

* Screwdriver
* Wire strippers (scissors work, if you're careful)
* Computer for programming

## Setting up the hardware

1. Unscrew the switch from the lamp cord (if you don't have a light with a switch, cut one side of the light's power cord)
  ![](https://lh3.googleusercontent.com/-mkQHIR5y2lw/VIDmEGV1DCI/AAAAAAAALU8/15RFTzlIiAY/w828-h466-no/20141204_095821.jpg)
2. Peel back the cut ends and use the wire strippers to expose the copper
  ![](https://lh3.googleusercontent.com/-CemLjAebfr0/VIDmJTVSr-I/AAAAAAAALV4/jtebCw4Q_Ro/w828-h466-no/20141204_100235.jpg)
3. Using a screwdriver to press down on the tabs, insert both exposed copper ends into the two sides of Relay 1 on the Relay Module
  ![](https://lh6.googleusercontent.com/-3cbTeMvu7EE/VIDmKSzDN9I/AAAAAAAALWo/eZnKGvjpMw0/w828-h466-no/20141204_100411.jpg)
4. Plug the Relay Module into Port A on the Tessel
  ![](https://lh6.googleusercontent.com/-Mcg8Zd_Mp2U/VIDmMnumivI/AAAAAAAALWc/WwOy-MQaaxE/w828-h466-no/20141204_102039.jpg)
5. Plug in power to the lights
6. USB power the Tessel (plug it in to your computer to program)

## To run

1. Clone this repo
2. From within the repo, `npm install` to install dependencies
3. Ensure your hardware is set up properly by running `tessel run relay-test.js`. If nothing happens, check your connections and refer to the [Relay Guide](http://start.tessel.io/modules/relay)
4. In `index.js`, change the wifi settings and site to monitor to suit your needs
5. To run temporarily with logs, `tessel run index.js`
6. To program for long-term use, `tessel push index.js`
7. You can now unplug Tessel from your computer and power externally according to the [guide](https://tessel.io/docs/untethered)
