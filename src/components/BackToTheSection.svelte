<script>
	import { fade } from 'svelte/transition';
	import Back from '../icons/arrow-back-outline.svg';

	export let active;

	const handleBack = () => active = "";
</script>

{#if active}
	<button transition:fade class="back" on:click={handleBack}>
		<div class="icon">
			<Back width="100%" height="100%"/>
		</div>
	</button>
{/if}

<style>
	.back {
		position: fixed;
		top: 10px;
		left: 10px;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		padding: 12px;
		border: none;
		z-index: 100;
		cursor: pointer;
		background-color: rgba(0,0,0, .6);
		transition: filter var(--transition-time);
	}

	.back:hover {
		filter: invert(100%);
	}

	.icon {
		pointer-events: none;
	}

</style>