<script>
	import Line from '../common/Line.svelte';
	export let color;
	export let position = "left";
</script>

<span 
	class="marco" 
	class:left={position === "left"} 
	class:right={position === "right"} 
	> 
	<Line
	  time="var(--transition-time)"
	  color={color} 
		distance="100%" 
		position="left" 
		origin="bottom" 
		volumen="4px"
		/>
	<Line
	  time="var(--transition-time)"
	  color={color} 
		distance="100%" 
		position="bottom" 
		origin="left" 
		volumen="4px"
		/>
	<Line
	  time="var(--transition-time)"
	  color={color} 
		distance="100%" 
		position="right" 
		origin="bottom" 
		volumen="4px" delay="calc(0.6 * var(--transition-time))" />
	<Line
	  time="var(--transition-time)"
	  color={color}
		distance="100%" 
		position="top" 
		origin="left" 
		volumen="4px" delay="calc(0.6 * var(--transition-time))" />
</span>


<style>
	.marco {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.left {
		transform: translate(-25px, 25px);		
	}

	.right {
		transform: translate(25px, 25px);
	}
</style>