// jshint ignore: start
var maps = [{
  "hexname": "AllodsBightHex",
  "name": "Allods Bight",
  "x": 2,
  "y": 6
}, {
  "hexname": "CallahansPassageHex",
  "name": "Callahans Passage",
  "x": 1,
  "y": 2
}, {
  "hexname": "DeadLandsHex",
  "name": "Deadlands",
  "x": 1,
  "y": 4
}, {
  "hexname": "DrownedValeHex",
  "name": "Drowned Vale",
  "x": 2,
  "y": 5
}, {
  "hexname": "EndlessShoreHex",
  "name": "Endless Shore",
  "x": 2,
  "y": 4
}, {
  "hexname": "FarranacCoastHex",
  "name": "Farranac Coast",
  "x": 0,
  "y": 4
}, {
  "hexname": "FishermansRowHex",
  "name": "Fishermans Row",
  "x": 0,
  "y": 5
}, {
  "hexname": "GodcroftsHex",
  "name": "Godcrofts",
  "x": 3,
  "y": 3
}, {
  "hexname": "GreatMarchHex",
  "name": "Great March",
  "x": 1,
  "y": 8
}, {
  "hexname": "HeartlandsHex",
  "name": "Heartlands",
  "x": 1,
  "y": 7
}, {
  "hexname": "LinnMercyHex",
  "name": "Linn of Mercy",
  "x": 1,
  "y": 3
}, {
  "hexname": "LochMorHex",
  "name": "Loch Mor",
  "x": 1,
  "y": 5
}, {
  "hexname": "MarbanHollow",
  "name": "Marban Hollow",
  "x": 2,
  "y": 3
}, {
  "hexname": "MooringCountyHex",
  "name": "Moors",
  "x": 1,
  "y": 1
}, {
  "hexname": "OarbreakerHex",
  "name": "Oarbreaker Isles",
  "x": 0,
  "y": 3
}, {
  "hexname": "ReachingTrailHex",
  "name": "Reaching Trail",
  "x": 1,
  "y": 0
}, {
  "hexname": "ShackledChasmHex",
  "name": "Shackled Chasm",
  "x": 2,
  "y": 7
}, {
  "hexname": "StonecradleHex",
  "name": "Stonecradle",
  "x": 0,
  "y": 2
}, {
  "hexname": "TempestIslandHex",
  "name": "Tempest Island",
  "x": 3,
  "y": 5
}, {
  "hexname": "UmbralWildwoodHex",
  "name": "Umbral Wildwood",
  "x": 1,
  "y": 6
}, {
  "hexname": "ViperPitHex",
  "name": "Viper Pit",
  "x": 2,
  "y": 1
}, {
  "hexname": "WeatheredExpanseHex",
  "name": "Weathered Expanse",
  "x": 2,
  "y": 2
}, {
  "hexname": "WestgateHex",
  "name": "Westgate",
  "x": 0,
  "y": 6
}];
var iconTypes = {
  "2": {
    "name": "MapIconKeep",
    "title": "Keep"
  },
  "4": {
    "name": "MapIconTownHall",
    "title": "Town Hall"
  },
  "5": {
    "name": "MapIconStaticBase1",
    "title": "Town Hall T1"
  },
  "6": {
    "name": "MapIconStaticBase2",
    "title": "Town Hall T2"
  },
  "7": {
    "name": "MapIconStaticBase3",
    "title": "Town Hall T3"
  },
  "11": {
    "name": "MapIconMedical",
    "title": "Hospital"
  },
  "12": {
    "name": "MapIconVehicle",
    "title": "Vehicle Factory",
    "color": [152, 48, 201]
  },
  "14": {
    "name": "MapIconSupplies",
    "title": "Supplies"
  },
  "15": {
    "name": "MapIconWorkshop",
    "title": "Workshop"
  },
  "16": {
    "name": "MapIconManufacturing",
    "title": "Manufacturing"
  },
  "17": {
    "name": "MapIconManufacturing",
    "title": "Refinery"
  },
  "18": {
    "name": "MapIconShipyard",
    "title": "Shipyard"
  },
  "19": {
    "name": "MapIconTechCenter",
    "title": "Tech Center"
  },
  "20": {
    "name": "MapIconSalvage",
    "title": "Salvage Field",
    "color": [154, 122, 85]
  },
  "21": {
    "name": "MapIconComponents",
    "title": "Component Field",
    "color": [169, 169, 169]
  },
  "22": {
    "name": "MapIconFuel",
    "title": "Fuel Field",
    "color": [205, 107, 35]
  },
  "23": {
    "name": "MapIconSulfur",
    "title": "Sulphur Field",
    "color": [199, 199, 87]
  },
  "27": {
    "name": "MapIconKeep",
    "title": "Keep"
  },
  "28": {
    "name": "MapIconObservationTower",
    "title": "Observation Tower"
  },
  "29": {
    "name": "MapIconFort",
    "title": "Fort"
  },
  "31": {
    "name": "MapIconScrapMine",
    "title": "Salvage Mine",
    "color": [154, 122, 85]
  },
  "32": {
    "name": "MapIconSulfurMine",
    "title": "Sulphur Mine",
    "color": [199, 199, 87]
  },
  "33": {
    "name": "MapIconStorageFacility",
    "title": "Storage Facility"
  },
  "34": {
    "name": "MapIconFactory",
    "title": "Factory"
  },
  "35": {
    "name": "MapIconSafehouse",
    "title": "Safehouse"
  },
  "36": {
    "name": "MapIconAmmoFactory",
    "title": "Ammo Factory"
  },
  "37": {
    "name": "MapIconRocketSite",
    "title": "Rocket Launch Site"
  },
  "38": {
    "name": "MapIconSalvageMine",
    "title": "Salvage Mine",
    "color": [154, 122, 85]
  },
  "39": {
    "name": "MapIconConstructionYard",
    "title": "Construction Yard"
  },
  "40": {
    "name": "MapIconComponentMine",
    "title": "Component Mine",
    "color": [169, 169, 169]
  },
  "41": {
    "name": "MapIconOilWell",
    "title": "Oil Well",
    "color": [205, 107, 35]
  },
  "44": {
    "name": "MapIconFortCursed",
    "title": "Cursed Fort"
  },
  "45": {
    "name": "MapIconRelicBase",
    "title": "Relic Base"
  },
  "46": {
    "name": "MapIconRelicBase",
    "title": "Relic Base"
  },
  "47": {
    "name": "MapIconRelicBase",
    "title": "Relic Base"
  },
  "51": {
    "name": "MapIconFactory",
    "title": "Mass Production Factory",
    "color": [205, 107, 35]
  },
  "96": {
    "name": "MapIconScorchedTown",
    "title": "Scorched Town"
  },
  "97": {
    "name": "MapIconCivicCenter",
    "title": "Civic Center"
  },
  "98": {
    "name": "MapIconVictory",
    "title": "Victory Town"
  },
  "99": {
    "name": "MapIconHomeBaseHall",
    "title": "Home Base Hall"
  }
};
var capturable = JSON.parse('[4,5,6,7,19,27,28,29,30,35,37,44,45,46,47,98,99]');
var colors = {
  "Colonial": "#152612",
  "Warden": "#041739"
};
var flags = {
  "IsVictoryBase": 0x01,
  "IsBuildSite": 0x04,
  "IsScorched": 0x10,
  "IsTownClaimed": 0x20
};
const cachedFetch = (url, options, force = false) => {
  let expiry = 5 * 60;

  if (typeof options === 'number') {
    expiry = options;
    options = undefined;
  } else if (typeof options === 'object') {
      expiry = options.seconds || expiry;
    }

  let cacheKey = url;
  let cached = localStorage.getItem(cacheKey);
  let whenCached = localStorage.getItem(cacheKey + ':ts');

  if (cached !== null && whenCached !== null) {
    let age = (Date.now() - whenCached) / 1000;

    if (age < expiry) {
      let response = new Response(new Blob([cached]));
      return Promise.resolve(response);
    } else {
        localStorage.removeItem(cacheKey);
        localStorage.removeItem(cacheKey + ':ts');
      }
  }

  return fetch(url, options).then(response => {
    if (response.status === 200) {
      let ct = response.headers.get('Content-Type');

      if (ct && (ct.match(/application\/json/i) || ct.match(/text\//i))) {
        response.clone().text().then(content => {
          localStorage.setItem(cacheKey, content);
          localStorage.setItem(cacheKey + ':ts', Date.now());
        });
      }
    }

    return response;
  });
};

async function getJSON(url, options) {
  let response = await cachedFetch(url, options);
  let data = await response.json();
  return data;
}
function xy(x, y) {
  if (L.Util.isArray(x)) {
    return L.latLng(x[1], x[0]);
  }

  return L.latLng(y, x);
}

;

function isOdd(num) {
  return num % 2;
}

class Map {
  addLayers() {
    this.hexNames = L.layerGroup().addTo(this.map);
    this.hexBorders = L.layerGroup().addTo(this.map);
    this.icons = L.layerGroup();
    this.textItemsMajor = L.layerGroup();
    this.textItemsMinor = L.layerGroup();
  }

  addControls() {
    this.controls = L.control.layers({}, {}, {
      collapsed: false
    });
    this.controls.addOverlay(this.hexNames, "Hex Names").addTo(this.map);
    this.controls.addOverlay(this.textItemsMajor, "Text Items Major").addTo(this.map);
    this.controls.addOverlay(this.textItemsMinor, "Text Items Minor").addTo(this.map);
    this.controls.addOverlay(this.icons, "Icons").addTo(this.map);
    this.scale = L.control.scale().addTo(this.map);
  }

  constructor() {
    L.CRS.pr = L.extend({}, L.CRS.Simple, {
      transformation: L.transformation(0.125, 0, 0.125, 0)
    });
    this.map = L.map('mapid', {
      crs: L.CRS.pr,
      preferCanvas: true,
      minZoom: 0,
      maxZoom: 5,
      zoom: 0,
      zoomSnap: 0.5,
      center: xy(2816, 2220),
      maxBounds: [xy(0, 0), xy(5632, 4440)]
    });
    this.addLayers();
    this.addControls();
    this.mapImg = L.tileLayer('img/maps/{z}/{y}/{x}.png', {
      bounds: [xy(0, 0), xy(5632, 4440)],
      zoomOffset: 2,
      minNativeZoom: 0,
      maxNativeZoom: 3
    }).addTo(this.map);
    this.map.setView(xy(2816, 2220), 0);
    this.map.on('click', function (ev) {
      if (ev.originalEvent.shiftKey) console.log("xy(" + ev.latlng.lng + "," + ev.latlng.lat + ")");
    });
    this.map.on('zoomend', this.onZoomHandler, this);
  }

  onZoomHandler() {
    const x = this.map.getZoom();

    switch (true) {
      case x <= 1:
        this.map.addLayer(this.hexNames);
        this.map.removeLayer(this.textItemsMajor);
        this.map.removeLayer(this.textItemsMinor);
        this.map.removeLayer(this.icons);
        break;

      case x <= 2:
        this.map.removeLayer(this.hexNames);
        this.map.addLayer(this.textItemsMajor);
        this.map.removeLayer(this.textItemsMinor);
        this.map.removeLayer(this.icons);
        break;

      case x <= 5:
        this.map.removeLayer(this.hexNames);
        this.map.addLayer(this.textItemsMajor);
        this.map.addLayer(this.textItemsMinor);
        this.map.addLayer(this.icons);
        break;

      default:
        this.map.addLayer(this.hexNames);
        this.map.removeLayer(this.textItemsMajor);
        this.map.removeLayer(this.textItemsMinor);
        this.map.removeLayer(this.icons);
        break;
    }
  }

}

;
class Hex {
  constructor(hexname, map) {
    this.hexname = hexname;
    this.map = map;
    this.enabled = mapsEnabled.includes(hexname);
    this.png = "img/maps/Map" + hexname + ".png";

    for (var i in maps) {
      if (maps[i].hexname == this.hexname) {
        this.name = maps[i].name;
        this.offsetX = isOdd(maps[i].y) ? maps[i].x * 1536.0 : maps[i].x * 1536.0 + 768.0;
        this.offsetY = maps[i].y * 444.0;
        this.offset = L.latLng(xy(this.offsetX, this.offsetY));
        this.size = L.latLng(xy(1024, 888));
        this.corner = L.latLng(this.offset.lat + this.size.lat, this.offset.lng + this.size.lng);
        this.bounds = L.latLngBounds(this.offset, this.corner);
        this.center = this.bounds.getCenter();
        return;
      }
    }
  }

  addToMap() {
    this.drawBorders();
    this.addHexName();

    if (!this.enabled) {
      return;
    }

    ;
    this.addStaticData();
    this.addDynamicData();
  }

  drawBorders() {
    var p1 = xy(this.offsetX + 254, this.offsetY + 888);
    var p2 = xy(this.offsetX + 768, this.offsetY + 888);
    var p3 = xy(this.offsetX + 1024, this.offsetY + 444);
    var p4 = xy(this.offsetX + 768, this.offsetY);
    var p5 = xy(this.offsetX + 254, this.offsetY);
    var p6 = xy(this.offsetX, this.offsetY + 444);
    this.border = L.polygon([[p1, p2, p3, p4, p5, p6]], {
      color: '#999',
      fillOpacity: 0.8,
      fill: this.enabled ? false : true
    }).addTo(this.map.hexBorders);
  }

  addHexName() {
    this.cp = L.circle(this.center, {
      radius: 1,
      opacity: 0.1
    }).bindTooltip(this.name, {
      permanent: true,
      direction: "top",
      className: "mapLabel"
    }).addTo(this.map.hexNames);
  }

  addStaticData() {
    if (!this.enabled) {
      return;
    }

    ;
    this.mapTextItems = [];

    if (staticData[this.hexname] && staticData[this.hexname].mapTextItems) {
      staticData[this.hexname].mapTextItems.forEach(item => {
        var x = this.offsetX + 1024 * item.x;
        var y = this.offsetY + 888 * item.y;
        this.mapTextItems[item.text] = L.circle(xy(x, y), {
          radius: 1,
          opacity: 0.1
        }).bindTooltip(item.text, {
          permanent: true,
          direction: "top",
          className: "mapLabel"
        }).addTo(item.mapMarkerType == "Major" ? this.map.textItemsMajor : this.map.textItemsMinor);
      });
    }
  }

  addDynamicData() {
    if (!this.enabled) {
      return;
    }

    ;
    this.icons = [];

    if (dynamicData[this.hexname] && dynamicData[this.hexname].mapItems) {
      dynamicData[this.hexname].mapItems.forEach(item => {
        var x = this.offsetX + 1024 * item.x;
        var y = this.offsetY + 888 * item.y;
        var faction = "";

        if (item.teamId == "COLONIALS") {
          faction = "Colonial";
        }

        ;

        if (item.teamId == "WARDENS") {
          faction = "Warden";
        }

        ;
        this.icons[x + ":" + y] = L.marker(xy(x, y), {
          icon: new L.icon({
            iconUrl: "img/icons/" + iconTypes[item.iconType].name + faction + '.png',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
          })
        }).bindTooltip("<p>" + iconTypes[item.iconType].title + "</br>Team: " + item.teamId + "</p>", {}).addTo(capturable.includes(item.iconType) ? this.map.textItemsMajor : this.map.icons);
      });
    }

    ;
  }

}

;
var base = "https://war-service-live.foxholeservices.com/api";
var war_url = base + '/worldconquest/war';
var war = {};
getJSON(war_url, 60).then(data => {
  war = data;
  console.log("var war = " + JSON.stringify(data));
});
var maps_url = base + '/worldconquest/maps';
var mapsEnabled = [];
var hexes = [];
var staticData = {};
var dynamicData = {};
var map = new Map();
getJSON(maps_url, 86400).then(data => {
  mapsEnabled = data;
  maps.forEach(hex => {
    hexes[hex.hexname] = new Hex(hex.hexname, map);
    hexes[hex.hexname].drawBorders();
    hexes[hex.hexname].addHexName();
  });
  fetchStatic(mapsEnabled);
  fetchDynamic(mapsEnabled);
});

function fetchStatic(_hexes) {
  _hexes.forEach(hex => {
    getJSON(maps_url + '/' + hex + '/static', 86400).then(data => {
      staticData[hex] = data;
      hexes[hex].addStaticData();
    });
  });
}

;
var warReport = {};

function fetchDynamic(_hexes) {
  _hexes.forEach(hex => {
    getJSON(maps_url + '/' + hex + '/dynamic/public', 60).then(data => {
      dynamicData[hex] = data;
      hexes[hex].addDynamicData();
    });
    getJSON(base + '/worldconquest/warReport/' + hex, 60).then(data => {
      warReport[hex] = data;
    });
  });
}

;
