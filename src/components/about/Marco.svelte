<script>
	import Line from '../Line.svelte';
</script>

<span class="marco">
	<Line
	  time="var(--transition-time)"
	  color="var(--primary)" 
		distance="100%" 
		position="left" 
		origin="bottom" 
		volumen="4px" />
	<Line
	  time="var(--transition-time)"
	  color="var(--primary)" 
		distance="100%" 
		position="bottom" 
		origin="left" 
		volumen="4px"/>
	<Line
	  time="var(--transition-time)"
	  color="var(--primary)" 
		distance="100%" 
		position="right" 
		origin="bottom" 
		volumen="4px" delay="calc( .8 * var(--transition-time))" />
	<Line
	  time="var(--transition-time)"
	  color="var(--primary)" 
		distance="100%" 
		position="top" 
		origin="left" 
		volumen="4px" delay="calc( .8* var(--transition-time))" />
</span>


<style>
	.marco {
		position: absolute;
		top: 0px;
		left: 0;
		right: 0;
		bottom: 0;
		transform: translate(-10%, 6%);
	}
</style>