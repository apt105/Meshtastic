---
id: windows_firmware_getting_started
title: Installing Meshtastic firmware from Windows
sidebar_label: Windows
slug: /getting_started/firmware/windows
---

## Installation from GUI

1. Download and unzip the latest Meshtastic firmware [release](https://github.com/meshtastic/Meshtastic-esp32/releases).
2. Download [ESPHome Flasher](https://github.com/esphome/esphome-flasher/releases).
3. Connect your radio to your USB port and open ESPHome Flasher.
4. If your board is not showing under Serial Port then you likely need to install the drivers for the CP210X serial chip. In Windows you can check by searching “Device Manager” and ensuring the device is shown under “Ports”.
5. If there is an error, download the [drivers](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers), then unzip and run the Installer application.
6. In ESPHome Flasher, refresh the serial ports and select the port to which your board is connected.
7. Browse to the previously downloaded firmware and select the correct firmware based on the board type.
8. Select Flash ESP.
9. Once complete, “Done! Flashing is complete!” will be shown.
10. The board will boot and show the Meshtastic logo.
11. Debug messages sent from the Meshtastic device can be viewed with a terminal program such as PuTTY. Within PuTTY, click “Serial”, enter the “Serial line” com port (can be found at step 4), enter “Speed” as 921600, then click “Open”.

## Installation from commandline

Requires Python, pip, Gitbash

1. Download and install [Python](https://www.python.org/)
2. If you have a recent version of Python, pip should be installed by default. Check using the command `py -m pip --version`. This will display the installed version of pip. If it returns an error, you will need to [install pip](https://pip.pypa.io/en/stable/installing/).
3. Download and install [Gitbash](https://gitforwindows.org/) (or other appropriate shell)
4. Run `gitbash` and complete the installation as per the instructions for linux commandline.

## Troubleshooting

For any issues during setup, search [our forum](https://meshtastic.discourse.group) to find a solution. If you can't find one, please post your problem, providing as much detail as possible.
