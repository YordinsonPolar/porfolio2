<script>
	import Section from '../components/Section.svelte';
	let active = "";

	$: console.log(active)


</script>

<div class="container" class:active={active !== ""}>
	<Section
		bind:active 
		clipPath="polygon(0 0, 56% 0, 23% 100%, 0% 100%)"
		bgImg="/images/projects.jpg"
	/>
<section class="section">
			<div 
				on:click|self={() => active = "about"}
				class:active={active === "about"}
				href="/" 
				title="Projects" 
				class="clip about-clip"
				>
				<div class="title">
					<button on:click={() => active = ""} >back</button>
					<h2>Projects</h2>
					<p>Check my projects</p>
				</div>
			</div>
</section>
<section class="section">
			<div 
				on:click|self={() => active = "contact"}
				class:active={active === "contact"}
				href="/" 
				title="Projects" 
				class="clip contact-clip"
				>
				<div class="title">
					<button on:click={() => active = ""} >back</button>
					<h2>Projects</h2>
					<p>Check my projects</p>
				</div>
			</div>
</section>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background: #111;
		transition: 300ms;
	}

	.container .clip {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transition: 300ms;
	}

	.container .clip.projects-clip {
		background-image: url('/images/projects.jpg');
		background-size: cover;
		clip-path: var(--clip-path);
	}

	.container .clip.about-clip {
		background-image: url('/images/about.jpg');
		background-size: cover;
		clip-path: polygon(49% 0, 100% 0%, 49% 100%, 20% 100%);
	}

	.container .clip.contact-clip {
		background-image: url('/images/contact.jpg');
		background-size: cover;
		clip-path: polygon(100% 0, 100% 0, 100% 99%, 50% 100%);
	}

	.container.active .clip {
		clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
	}

	.container .clip.active {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		transition-delay: 300ms;
		z-index: 99999;
	}

</style>