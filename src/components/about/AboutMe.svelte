<script>
	import Line from '../common/Line.svelte';
	import Button from '../common/Button.svelte';
	export let aboutDelay;
</script>

<div class="about-me">
	<Line
	  time="var(--transition-time)"
	  color="var(--primary)" 
		distance="100%" 
		position="left" 
		origin="center" 
		volumen="4px" delay="calc({aboutDelay + 1.6} * var(--transition-time))"/>
	<Line
	  time="var(--transition-time)"
	  color="var(--primary)" 
		distance="30px" 
		position="top" 
		origin="left" 
		volumen="4px" delay="calc({aboutDelay + 2}* var(--transition-time))" />
	<Line
	  time="var(--transition-time)"
	  color="var(--primary)" 
		distance="103px" 
		position="bottom" 
		origin="left" 
		volumen="4px" delay="calc({aboutDelay + 2} * var(--transition-time))" />

	<h1>About</h1>
	<div>
		<span class="line">
			<Line
			  time="var(--transition-time)"
			  color="var(--primary)" 
				distance="100%" 
				position="bottom" 
				origin="left" 
				volumen="4px" delay="calc( {aboutDelay + 2} * var(--transition-time))" />
		</span>
		<p class="sinopsis">
			I´m Yordinson Polar a self-taught programmer based in Caracas-Venezuela.
			<br />
			<br />
			I´m a like to create new think with the latest in the tecnologie, i´m a enthusiast reactive programming and i have some experience in the backend.
			<br />
			<br />
			when i not coding i am playing the guitar o reading books.
		</p>
	</div>
	
	<div 
		class="projects-button">
		<Button label="Projects" size="1rem" />	
	</div>
</div>

<style>
	.about-me {
		--timeDelay: 7;
		--delay: calc( var(--timeDelay) * var(--transition-time));
		position: relative;
		padding: 0 50px;
		min-height: 500px;
	}

	.about-me h1 {
		position: relative;
		top: -48px;
		left: 0;
		font-size: var(--title-size);
		opacity: 0;
		border-bottom: 1px solid var(--primary);
		animation: vanish var(--transition-time) ease-in-out forwards;
		animation-delay: var(--delay);
	}

	.about-me h1::first-letter {
		color: var(--primary);
		font-size: 4rem;
	}

	.about-me div {
		position: relative;
		font-size: 1.5rem;
	}

	.about-me div .line {
		position: absolute;
		top: 50%;
		left: -48px;
		width: 15px;
		height: 4px;
		content: "";
		transform: translateY(50%);
	}

	.about-me div .sinopsis {
		opacity: 0;
		margin-bottom: 150px;
		animation: vanish var(--transition-time) ease-in-out forwards;
		animation-delay: var(--delay);
	}

	.about-me .projects-button {
		position: absolute;
		bottom: -25px;
		left: 100px;
		z-index: 5;
		opacity: 0;
		animation: vanish var(--transition-time) ease-in-out forwards;
		animation-delay: var(--delay);
	}

	@keyframes vanish {
		from {
			transform: translate(-5%);
			opacity: 0;
		}
		to {
			transform: translate(0);
			opacity: 1;
		}
	}

	@media (max-width: 1024px) {
		.about-me {
			min-height: 300px;
		}

		.about-me div .sinopsis  {
			font-size: 1.2rem;
		}
	}

	@media (max-width: 620px) {
		.about-me {
			margin-top: 90px;
		}
	}
</style>