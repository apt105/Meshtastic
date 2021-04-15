---
id: device-software
title: Device firmware
sidebar_label: Device firmware
---

The device firmware runs on nodes to build the mesh for communication. Each different make and model of node requires a different build of the Meshtastic firmware in order to run properly. Thankfully, due to the design of Meshtastic, it is possible to port the firmware to new devices as they become available.

The current firmware has support for a screen to display received messages, along with information about nodes on the mesh, and more detailed information about the device on which it is running.

A number of devices support buttons that can be used to interact with the firmware. These buttons have a number of different functions:
* Single press - This changes the page of information displayed on the screen.
* Double press - This sets the bluetooth pairing code to `123456` (useful if you do not have a screen on the device).
* Long press - This adjusts the contrast of the screen.
* Long press during reboot - This turns on the software wifi access point on devices that support wifi.