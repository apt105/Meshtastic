//import { title } from "../../../docusaurus.config";

/*
const boxes: {*/
  caseTitle: String;
  creator: String;
  description: String;
  preview: String;
  website: String;
  buttonVal: String;
  /*
}[];
*/
const boxes = [
  {
    caseTitle: 'Meshtastic Slim Case',
    creator: 'BrianN',
    description: 'A slim case for use with the T-Beam v1.1 with a LiPo battery',
    preview: 'https://cdn.thingiverse.com/assets/48/52/82/87/ea/featured_preview_Capture.JPG',
    website: 'https://www.thingiverse.com/thing:4828465',
    buttonVal: 'Visit on Thingiverse',
  },
  {
    caseTitle: 'TTGO T-Beam T22_v1.1 20191212 Case (IPEX Version)',
    creator: 'jangrewe',
    description: 'A minimal, sturdy, screwless assembly for the T-Beam v1.1',
    preview: 'https://cdn.thingiverse.com/assets/bd/42/80/2c/73/featured_preview_68658129-8ce6-479d-b710-32e3a8be33b1.jpg',
    website: 'https://www.thingiverse.com/thing:4619981',
    buttonVal: 'Visit on Thingiverse',
  },
  {
    caseTitle: 'T-Beam Lite Stand',
    creator: 'BrinaN',
    description: 'Lightweight stand for a TTGO T-Beam development board',
    preview: 'https://cdn.thingiverse.com/assets/e9/b6/85/ed/1a/featured_preview_Capture.JPG',
    website: 'https://www.thingiverse.com/thing:4778297',
    buttonVal: 'Visit on Thingiverse',
  },
  {
    caseTitle: 'TTGO T-Beam Case',
    creator: 'BrianN',
    description: 'Designed for the T-Beam v1.0',
    preview: 'https://cdn.thingiverse.com/assets/b3/96/db/92/7c/large_display_Capture.JPG',
    website: 'https://www.thingiverse.com/thing:4677388',
    buttonVal: 'Visit on Thingiverse',
  },
  {
    caseTitle: 'Heltec LoRa 32 Case',
    creator: 'BrianN',
    description: 'Designed for the Heltec LoRa 32 V2 board',
    preview: 'https://cdn.thingiverse.com/assets/51/9d/a0/8d/c8/featured_preview_Capture.JPG',
    website: 'https://www.thingiverse.com/thing:4460556',
    buttonVal: 'Visit on Thingiverse',
  },
  {
    caseTitle: 'Meshtastic Case for TTGO TBeam',
    creator: 'jefish',
    description: 'A laser cut case',
    preview: 'https://cdn.thingiverse.com/assets/48/04/78/b3/9e/featured_preview_1.jpg',
    website: 'https://www.thingiverse.com/thing:4552771',
    buttonVal: 'Visit on Thingiverse',
  },
  {
    caseTitle: 'ttgo lora esp32 case',
    creator: 'sbarthelemy',
    description: 'A case for the Lora ESP32 V1.0',
    preview: 'https://cdn.thingiverse.com/renders/e6/6f/4b/87/11/d2b5ca33bd970f64a6301fa75ae2eb22_preview_featured.jpg',
    website: 'https://www.thingiverse.com/thing:3341310',
    buttonVal: 'Visit on Thingiverse',
  },
  {
    caseTitle: 'TTGO T-Beam V1.1 NEO-6M (Meshtastic) Case',
    creator: 'tpatrickwalsh',
    description: 'Screwless assembly, prnounced buttons. Includes a model of the board itself',
    preview: 'https://cdn.thingiverse.com/assets/a4/5d/5d/e7/34/featured_preview_PXL_20210207_091233782.jpg',
    website: 'https://www.thingiverse.com/thing:4753247',
    buttonVal: 'Visit on Thingiverse',
  },
  {
    caseTitle: 'TBeam Case Screwless (T22_v1.1 20191212 with SX1262, NEO-M8 and IPEX)',
    creator: 'drewsed',
    description: 'Screwless and easy to print',
    preview: 'https://cdn.thingiverse.com/assets/88/da/e6/51/f1/featured_preview_1-min.JPG',
    website: 'https://www.thingiverse.com/thing:4587297',
    buttonVal: 'Visit on Thingiverse',
  },    
  {
    caseTitle: 'TTGO T-Beam v1.0 Enclosure',
    creator: 'svideo',
    description: 'A modification of the SoftRF project case to fit an OLED screen',
    preview: 'https://cdn.thingiverse.com/assets/20/36/38/72/9e/featured_preview_TTGO_T-Beam_v1.0_Enclosure_Isometric.jpg',
    website: 'https://www.thingiverse.com/thing:4168101',
    buttonVal: 'Visit on Thingiverse',
  },    
  {
    caseTitle: 'TTGO T-Beam SoftRF T22 V1.0 20190612 Case',
    creator: 'rwanrooy',
    description: 'A case for the T-Beam V1.0, requiring no screws to assemble',
    preview: 'https://cdn.thingiverse.com/assets/e8/37/c8/84/4e/featured_preview_t-beam_foto_1.JPG',
    website: 'https://www.thingiverse.com/thing:3830711',
    buttonVal: 'Visit on Thingiverse',
  },
  {
    caseTitle: 'TTGO v2 LORA with buttons and 1.3" OLED Enclosure',
    creator: 'thekwijibo',
    description: 'One of the few enclosures to accomodate the larger 1.3" display',
    preview: 'https://cdn.thingiverse.com/assets/9e/70/92/14/74/large_display_IMG_20200701_204133.jpg',
    website: 'https://www.thingiverse.com/thing:4515987',
    buttonVal: 'Visit on Thingiverse',
  },    
  {
    caseTitle: 'TTGO T-Beam Shock Resistant Enclosure',
    creator: '@SexyCyborg',
    description: 'A shock-mount for the T-Beam for use in PVC pipe',
    preview: 'https://cdn.myminifactory.com/assets/object-assets/5edcdeffd53c8/images/720X720-wechatimg173.jpg',
    website: 'https://www.myminifactory.com/object/3d-print-ttgo-t-beam-shock-resistant-enclosure-124281',
    buttonVal: 'Visit on MyMiniFactory',
  },
  {
    caseTitle: 'TTGO T-Beam V1.1 ESP32 LORA with GPS NEO-M8N Cas',
    creator: '@mark500',
    description: 'For TTGO T-Beam V1.1 ESP32 LORA with GPS NEO-M8N',
    preview: 'https://cdn2.myminifactory.com/assets/object-assets/5f53663405a66/images/720X720-img-20200905-101624.jpg',
    website: 'https://www.myminifactory.com/object/3d-print-ttgo-t-beam-v1-1-esp32-lora-with-gps-neo-m8n-case-133199',
    buttonVal: 'Visit on MyMiniFactory',
  },    
  {
    caseTitle: '26650 battery sized case for the T-Beam',
    creator: '@HaveBlue',
    description: 'Integrated buttons, printable with minimal supports',
    preview: 'https://aws1.discourse-cdn.com/free1/uploads/meshtastic/original/2X/5/57cb4caaf409585565b2399f30e8938093ec6951.jpeg',
    website: 'http://haveblue.org/wp-content/uploads/2021/04/Have-Blue-26650-case-v1.0-for-SX1262-T-Beam-v1.1.zip',
    buttonVal: 'Download zip',
  },
/*    {
      caseTitle: '',
      creator: '',
      description: '',
      preview: require('./cases/'),
      website: '',
      buttonVal: '',
    },    
    {
      caseTitle: '',
      creator: '',
      description: '',
      preview: require('./cases/'),
      website: '',
      buttonVal: '',
    }, */
];
/*
boxes.forEach((box) => {
    if (!box.preview || 
        (box.preview instanceof String &&
            (box.preview.startsWith('http') || box.preview.startsWith('//'))))
    {
        throw new Error ('Bad case site image preview',);
    }});
*/
  
export default boxes;
