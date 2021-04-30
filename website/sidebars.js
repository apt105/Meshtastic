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
    "getting_started/resources_getting_started",
    {
      "Howto's": [],
    },
  ],
  Software: [
    "software/overview-software",
    {
      "Meshtastic device": [
        "software/device/device-channels",
        "software/device/device-remote-admin",
        "software/device/remote-hardware-service",
        "software/device/device-wifi",
        "software/device/device-power",
        "software/device/critical-error-codes",
      ],
    },
    "software/device-software",
    {
      "Meshtastic Android": [
        "software/android/android-installation",
        "software/android/android-usage",
      ],
    },
    {
      "Meshtastic iOS": [
        "software/ios/ios-development",
      ],
    },
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
        "software/python/python-installation",
        "software/python/python-cli",
        "software/python/python-usage",
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
      "Community projects": [
        "software/community/community-overview",
        "software/community/community-atak",
        "software/community/community-pygui",
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
    "hardware/supported_hardware",
    {
      "Supported Hardware": [
        "hardware/tbeam-hardware",
        "hardware/lora-hardware",
        "hardware/heltec-hardware",
        "hardware/techo-hardware",
      ],
    },
    "hardware/behaviour_hardware",
    "hardware/antenna_hardware", /*
    { 
      "3D printed cases": [ 
        {
          type: "link",
          label: "Cases",
          href: "/cases/cases.js",
        },
      ], 
    }, */
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
