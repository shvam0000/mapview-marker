<template>
  <div id="map" class="v-screen h-screen">
    <div id="marker"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  methods: {
    createMap() {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoic2h2YW0wMDAwIiwiYSI6ImNsYzI4bTB4OTA4aHUzeW85cGR5amU2d3EifQ.zro_-7iWwGVR0Q5VJ6OaaA";

      // Creating map
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-122.420679, 37.772537],
        zoom: 15,
      });

      // Adding marker to the map
      const el = document.getElementById("marker");
      el.classList.add("markerggg");

      this.marker = new mapboxgl.Marker(el)
        .setLngLat([-122.420679, 37.772537])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            "<h3>San Francisco Airport</h3><p>SFO is the largest airport in the Bay Area.</p>"
          )
        )
        .addTo(map);
    },
  },
  mounted() {
    this.createMap();
  },
};
</script>

<style scoped>
.markerggg {
  background-image: url("https://i.imgur.com/MK4NUzI.png");
  background-size: 100%;
  width: 50px;
  height: 60px;
}
</style>
