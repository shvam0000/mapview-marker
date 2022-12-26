<template>
  <div id="map" class="v-screen h-screen"></div>
</template>

<script>
import mapboxgl from "mapbox-gl";

export default {
  mounted() {
    // Initialize the map
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2h2YW0wMDAwIiwiYSI6ImNsYzI4bTB4OTA4aHUzeW85cGR5amU2d3EifQ.zro_-7iWwGVR0Q5VJ6OaaA";
    this.map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
    });
  },
};
</script>

<!-- <style>
#map {
  height: 100;
  width: 100%;
}
</style> -->
