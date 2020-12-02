<script>
  import { onMount } from 'svelte';

	onMount(() => {
		var mymap = L.map('map').setView([10.5, -66.903116], 5); 
			L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	    maxZoom: 18,
	    id: 'mapbox/streets-v11',
	    tileSize: 512,
	    zoomOffset: -1,
	    accessToken: 'pk.eyJ1IjoiZGFuaWVsLXZ6bGEiLCJhIjoiY2tpN214bGxuMHhwOTJwcW8yMXZvaWVpbCJ9.G-MisYf54lkE7M7C_dGf7w'
	}).addTo(mymap);
		var marker = L.marker([10.5, -66.903116]).addTo(mymap);
		marker.bindPopup("<b style='color: #000'>Yordinson Polar<br>Caracas-Venezuela.<br/>Av. Principal Altamira.<br/><span style='color: var(--contact-color)'>Email: yordinsonpolar@gmail.com</span>").openPopup();
	})
	

</script> 
   
<div id="map"></div> 


<style>
	#map {
		height: 650px;
		width: 500px;
	}
</style>