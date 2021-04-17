module.exports = {
  "Getting Started": [
    "getting_started/overview_getting_started",
    {
      "Flashing Firmware": [
        "getting_started/flashing_firmware_getting_started",
        "getting_started/firmware/linux_firmware_getting_started",
        "getting_started/firmware/windows_firmware_getting_started",
      ],
    },
    "getting_started/concepts_getting_started",
    "getting_started/faq",
    {
      "Howto's": [],
    },
  ],
  Software: [
    "software/overview-software",
    "software/device-software",
    {
      "Meshtastic Android": [
        "software/android-software",
        "software/android-advanced-software",
      ],
    },
    "software/ios-software",
    {
      "Meshtastic.js": [
        "js/getting-started",
        "js/connecting",
        "js/events",
        "js/http-api",
        {
          type: "link",
          label: "API Docs",
          href: "https://js.meshtastic.org",
        },
      ],
    },
    {
      "Plugins": [
        "software/plugins/plugins",
        "software/plugins/store-foreward-plugin",
        "software/plugins/range-test-plugin",
        "software/plugins/environment-plugin",
        "software/plugins/ext-notif-plugin",
        "software/plugins/serial-plugin",
      ],
    },
    {
      "Meshtastic-python": [
        {
          type: "link",
          label: "API Docs",
          href: "https://meshtastic.github.io/Meshtastic-python",
        },
      ],
    },
    {
      "Meshtastic-web": [
        "software/web/web-app-software",
        "software/web/web-config-software",
        "software/web/web-usage-software",
        "software/web/web-partitions-software",
        "software/web/web-development-software",
      ],
    },
    {
      Other: [
        "software/other/sw-design",
        "software/other/remote-hardware-service",
        "software/other/rak815",
        "software/other/power",
        "software/other/plugin-api",
        "software/other/pinetab",
        "software/other/nrf52-TODO",
        "software/other/mqtt",
        "software/other/mesh-alg",
        "software/other/install-OSX",
        "software/other/esp32-arduino-build-notes",
        "software/other/device-api",
        "software/other/crypto",
        "software/other/build-instructions",
        "software/other/ant",
      ],
    },
  ],
  Hardware: [
    "hardware/supported_hardware_hardware",
    "hardware/behaviour_hardware",
    "hardware/antenna_hardware",
    "hardware/cases/cases.js"
  ],
  Developement: [
    {
      Protobufs: ["protobufs/api"],
    },
    "developers/api_developers",
    "developers/documents",
    "developers/radio-settings",
    "developers/http-api",
  ],
  Showcase: [
    "showcase/showcase",
  ]
};
