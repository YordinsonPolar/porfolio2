<script>
	export let size = "40px";
	export let lineWeight = "4px";
	export let color = "purple";
</script>

<div 
	class="loading" 
	style={`
		--size: ${size};
		--line-weight: ${lineWeight};
		--color: ${color}
	`}>
		<div class="ring-outer"></div>	
	<div class="ring-inner-container">
			<div class="ring-inner"></div>
	</div>
</div>


<style>
	.loading {
		--size: 50px;
		--line-weight: 4px;
		--color: purple;
		position: relative;
		width: var(--size);
		height: var(--size);
	}
	
	.ring-inner-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items:center;
	}
	
	div {
		border-radius: 50%
	}
	
	.ring-outer {
		display: flex;
		align-items:center;
		justify-content: center;
		width: 100%;
		height: 100%;
		border: var(--line-weight) solid transparent;
		border-right-color: var(--color);
		border-left-color: var(--color);
		animation: rotate linear 800ms infinite;
	}
	
	.ring-inner {
		width: calc(var(--size) / 2);
		height: calc(var(--size) / 2);
		border: var(--line-weight) solid transparent;
		border-right-color: var(--color);
		border-left-color: var(--color);
		opacity: .6;
		animation: rotate linear 1200ms infinite;
	}
	
	
	@keyframes rotate {
		from{
			transform: rotate(0);
		}
		to{
			transform: rotate(360deg);
		}
	}
	
</style>