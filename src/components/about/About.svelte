<script>
	import Line from '../../components/Line.svelte';
	import Marco from './Marco.svelte';
	import AboutMe from './AboutMe.svelte';

	const lazyLodingImg = ({ target }) => {
		target.style.transform = "translateX(0)"
		target.style.opacity = 1
	};
</script>

<section class="about">
	<div class="about-wrapper">
		<div class="perfil">
			<Marco />
			<img 
				class="img" 
				on:load={lazyLodingImg} 
				src="/images/about.jpg" 
				alt="Yordinson Polar">
		</div>
		<span class="line">
			<Line
			  time="var(--transition-time)"
			  color="var(--primary)" 
				distance="100%" 
				position="bottom" 
				origin="left" 
				volumen="4px" delay="calc( 1.4 * var(--transition-time))" />
		</span>
		<AboutMe />
	</div>
</section>



<style>
	.about {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.about-wrapper {
		width: 90%;
		display: grid;
		grid-template-columns: 4fr 1fr 15fr;
		align-items: center;
	}

	.perfil {
		position: relative;
		height: 80%;
	}

	.img {
		opacity: 0;
		position: relative;
		width: 100%;
		height: 100%;
		transform: translateX(-10%); 
		transition: 
			opacity var(--transition-time),
			transform var(--transition-time); 
	}

	.line {
		position: relative;
		height: 4px;
	}
	
</style>