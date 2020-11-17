<script>
	export let clipPath;
	export let title;
	export let bgImg;
	export let active = "";

</script>

<section class="section">
	<div 
		on:click|self={() => active = "projects"}
		href="/" 
		title="Projects"
		class:active={active === "projects"}
		class="clip projects-clip"
		style={`--clip-path: ${clipPath}; --bg-img: url(${bgImg});`}
		>
		<img class="img" src="/images/projects.jpg" alt="programmer code" />
		<div class="title">
			<button on:click={() => active = ""} >back</button>
			<h2>Projects</h2>
			<p>Check my projects</p>
		</div>
	</div>
</section>

<style>
	.clip {
		--clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		--bg-img: url("");
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		/* background-image: var(--bg-img); */
		background-size: cover;
		clip-path: var(--clip-path);
		transition: 300ms;
	}

	.clip.active {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		transition-delay: 300ms;
		z-index: 99999;
	}
	.img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: -1;
	}

</style>