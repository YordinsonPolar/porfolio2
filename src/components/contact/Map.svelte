<script>
  import { onMount } from 'svelte';

	onMount(() => {
		var mymap = L.map('map').setView([10.5, -66.903116], 20); 
		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZGFuaWVsLXZ6bGEiLCJhIjoiY2tpN214bGxuMHhwOTJwcW8yMXZvaWVpbCJ9.G-MisYf54lkE7M7C_dGf7w'
}).addTo(mymap);
		var marker = L.marker([10.5, -66.903116]).addTo(mymap);
	})
	

</script> 
   
<svelte:head> 
  <link defer rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin="annonymous"/>
	 <script defer src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin="annonymous"></script> 
</svelte:head> 
 
<div id="map"></div> 


<style>
	#map {
		height: 400px;
		width: 400px;
	}
</style>