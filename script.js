// Initialize and add the map
let map;

async function initMap() {
  //const position = { lat: 35.090328, lng: -92.441559 };
  const position =  {lat:35.090550 , lng: -92.429470};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 80,
    center: goodwillposition1,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Goodwill",
  });
}

initMap();