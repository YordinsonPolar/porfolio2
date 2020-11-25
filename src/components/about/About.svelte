<script>
	import Line from '../../components/common/Line.svelte';
	import Marco from './Marco.svelte';
	import AboutMe from './AboutMe.svelte';

	const lazyLodingImg = ({ target }) => {
		target.style.transform = "translateX(0)"
		target.style.opacity = 1
	};

	const aboutDelay = 4;
</script>


<section class="about">
	<div class="about-wrapper">
		<div class="perfil">
			<Marco {aboutDelay} />
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
				volumen="4px" delay="calc({aboutDelay + 1.2} * var(--transition-time))" />
		</span>
		<AboutMe {aboutDelay} />
	</div>
</section>



<style>
	.about {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		padding-bottom: 40px;
		background: rgba(0,0,0, .5);
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

	@media (max-width: 620px) {
		.about {
			height: 100%;
		}

		.about-wrapper {
			margin-top: 100px;
			width: 80%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 20px;
		}

		.img {
			min-height: 500px;
		}
	}
	
</style>