import mapboxgl from 'mapbox-gl'

export default function (context, inject) {
  // Set the default access token for all mapbox-gl instances
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2h2YW0wMDAwIiwiYSI6ImNsYzI4bTB4OTA4aHUzeW85cGR5amU2d3EifQ.zro_-7iWwGVR0Q5VJ6OaaA'

  // Inject the mapbox object into the context as $mapbox
  inject('mapbox', mapboxgl)
}
