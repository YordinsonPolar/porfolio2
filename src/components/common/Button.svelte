<script>
	export let label;
	export let size;
</script>

<button style={`--size: ${size}`}>{label}</button>

<style>
	button {
		--size: 14px;
		background: none;
		color: #fff;
		font-weight: 500;
		font-size: var(--size);
		padding: 6px 30px;
		border: calc( var(--size) / 5) solid var(--primary);
		transform: skewX(-20deg);
	}
</style>