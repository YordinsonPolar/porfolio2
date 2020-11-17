<script>
	export let active;

	const handleBack = () => active = "";
</script>

	<button 
		class="back"
		on:click={handleBack}
		>
		<svg class="icon icon-arrow-back-outline">
			<use xlink:href="#icon-arrow-back-outline"></use>
		</svg>
	</button>

<style>
	.back {
		background: none;
		position: absolute;
		top: 10px;
		left: 10px;
		z-index: 100;
	}

	.icon {
	  display: inline-block;
	  width: 1em;
	  height: 1em;
	  stroke-width: 0;
	  stroke: red;
	  fill: red;
	}
</style>