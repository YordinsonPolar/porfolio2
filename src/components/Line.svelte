<script>
	export let volumen = 4
	export let position = "left";
	export let origin  = "center";
	export let delay = 0;
	export let distance = "100%";
	export let time = "300"
	export let color = "green";
</script>

<span 
	class={`${position}`} 
	style={`
		--origin: ${origin}; 
		--volumen: ${volumen}; 
		--delay: ${delay}; 
		--distance: ${distance};
		--time: ${time};
		--color: ${color}`}>
</span>



<style>
	span {
		--volumen: 4px;
		--ditance: 100%;
		--origin: center;
		--delay: 0;
		--color: green;
		--time: 300ms;
		position: absolute;
		background: var(--color);
		transform: scale(0);
		transform-origin: var(--origin);
		animation: scale var(--time) ease-in forwards;
		animation-delay: var(--delay)
	}


	@keyframes scale {
		from{
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}

	/* ------ positions ------ */

	/* ---- vertical --- */

	.right, .left {
		top: 0;
		height: var(--distance);
		width: var(--volumen);
	}

	.right {
		right: 0;
	}

	.left {
		left: 0;
	}


	/* --- horizontal --- */

	.top, .bottom {
		left: 0;
		height: var(--volumen);
		width: var(--distance);
	}

	.top {
		top: 0;
	}
	.bottom {
		bottom: 0;
	}



</style>
