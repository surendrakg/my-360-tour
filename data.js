var APP_DATA = {
  "scenes": [
    {
      "id": "0-room-01",
      "name": "Room 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 256,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3990458089307722
      },
      "linkHotspots": [
        {
          "yaw": -0.21268384702107923,
          "pitch": -0.036315465323628615,
          "rotation": 6.283185307179586,
          "target": "1-room-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-room-02",
      "name": "Room 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 256,
      "initialViewParameters": {
        "yaw": -2.2705732306204034,
        "pitch": -0.0602718277470089,
        "fov": 1.3990458089307722
      },
      "linkHotspots": [
        {
          "yaw": -2.5420448593274063,
          "pitch": 0.021289433748147957,
          "rotation": 0,
          "target": "0-room-01"
        },
        {
          "yaw": -2.050523257513852,
          "pitch": 0.023146815781256436,
          "rotation": 0,
          "target": "2-room-03"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-room-03",
      "name": "Room 03",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 256,
      "initialViewParameters": {
        "yaw": -1.6359140094868536,
        "pitch": 0.0612314478709699,
        "fov": 1.3990458089307722
      },
      "linkHotspots": [
        {
          "yaw": -1.5815374026595315,
          "pitch": 0.2058484352545218,
          "rotation": 0,
          "target": "1-room-02"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
