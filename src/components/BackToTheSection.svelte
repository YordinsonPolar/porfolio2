<script>
	import { fade } from 'svelte/transition';
	import Back from '../icons/arrow-back-outline.svg';
	export let active;

	const handleBack = () => active = "";
</script>

{#if active}
	<button transition:fade
		class="back"
		on:click={handleBack}
		>
		<Back width="100%" height="100%"/>
	</button>
{/if}

<style>
	.back {
		background: none;
		position: absolute;
		top: 10px;
		left: 10px;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		padding: 12px;
		border: none;
		z-index: 100;
		cursor: pointer;
		background: rgba(0,0,0, .6);
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