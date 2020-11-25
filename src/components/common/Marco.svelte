<script>
	import Line from '../common/Line.svelte';
	export let aboutDelay;
	export let color;
</script>

<span class="marco">
	<Line
	  time="var(--transition-time)"
	  color={color} 
		distance="100%" 
		position="left" 
		origin="bottom" 
		volumen="4px"
		delay="calc({aboutDelay} * var(--transition-time))" />
	<Line
	  time="var(--transition-time)"
	  color={color} 
		distance="100%" 
		position="bottom" 
		origin="left" 
		volumen="4px"
		delay="calc({aboutDelay} * var(--transition-time))"/>
	<Line
	  time="var(--transition-time)"
	  color={color} 
		distance="100%" 
		position="right" 
		origin="bottom" 
		volumen="4px" delay="calc({aboutDelay + .6} * var(--transition-time))" />
	<Line
	  time="var(--transition-time)"
	  color={color}
		distance="100%" 
		position="top" 
		origin="left" 
		volumen="4px" delay="calc({aboutDelay + .6} * var(--transition-time))" />
</span>


<style>
	.marco {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transform: translate(-10%, 6%);
	}
</style>