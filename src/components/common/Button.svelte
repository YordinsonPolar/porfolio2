<script>
	export let label;
</script>

<button>{label}</button>

<style>
	button {
		background: none;
		color: #fff;
		font-size: 2rem;
		padding: 5px 35px;
		border: 4px solid var(--primary);
		transform: skewX(-20deg);
	}
</style>