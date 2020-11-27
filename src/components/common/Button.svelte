<script>
	export let label;
	export let size;
	export let color;
</script>

<button style={`--size: ${size}; --color: ${color}`}>{label}</button>

<style>
	button {
		--color: var(--about-color);
		--size: 14px;
		background: none;
		color: #fff;
		font-weight: 500;
		font-size: var(--size);
		padding: 8px 35px;
		border: calc( var(--size) / 5) solid var(--color);
		transform: skewX(-20deg);
		cursor: pointer;
		background-image: linear-gradient(45deg, var(--color) 50%, transparent 50%);
		background-position: 100%;
		background-size: 400%;
		transition: var(--transition-time) background ease-in-out;
	}


	button:hover {
		background-position: 0;
	}
</style>