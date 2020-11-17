<script>
	import Line from '../Line.svelte';
</script>

<div class="about-me">
	<Line
	  time="var(--transition-time)"
	  color="var(--primary)" 
		distance="100%" 
		position="left" 
		origin="center" 
		volumen="4px" delay="calc( 1.8 * var(--transition-time))"/>
	<Line
	  time="var(--transition-time)"
	  color="var(--primary)" 
		distance="30px" 
		position="top" 
		origin="left" 
		volumen="4px" delay="calc( 2.2 * var(--transition-time))" />
	<Line
	  time="var(--transition-time)"
	  color="var(--primary)" 
		distance="103px" 
		position="bottom" 
		origin="left" 
		volumen="4px" delay="calc( 2.2 * var(--transition-time))" />

	<h1>About</h1>
	<p>
		<span class="line">
			<Line
			  time="var(--transition-time)"
			  color="var(--primary)" 
				distance="100%" 
				position="bottom" 
				origin="left" 
				volumen="4px" delay="calc( 2.2 * var(--transition-time))" />
		</span>
		I´m Yordinson Polar a self-taught programmer based in Caracas-Venezuela.
		<br />
		<br />
		I´m a like to create new think with the latest in the tecnologie, i´m a enthusiast reactive programming and i have some experience in the backend.
		<br />
		<br />
		when i not coding i am playing the guitar o reading books.
	</p>
	
	<div class="projects-button">
		<button>
			Projects
		</button>
	</div>
</div>

<style>
	.about-me {
		position: relative;
		padding: 0 50px;
		min-height: 500px;
	}

	.about-me h1 {
		position: relative;
		top: -48px;
		left: 0;
		font-size: 2rem;
		opacity: 0;
		border-bottom: 1px solid var(--primary);
		animation: vanish var(--transition-time) ease-in-out forwards;
		animation-delay: calc( 2.8 * var(--transition-time));
	}

	.about-me h1::first-letter {
		color: var(--primary);
		font-size: 4rem;
	}

	.about-me p {
		position: relative;
		font-size: 1.5rem;
	}

	.about-me p .line {
		position: absolute;
		top: 50%;
		left: -48px;
		width: 15px;
		height: 4px;
		content: "";
		transform: translateY(50%);
	}

	.about-me .projects-button {
		position: absolute;
		bottom: -50px;
		left: 100px;
		z-index: 5;
		opacity: 0;
		animation: vanish var(--transition-time) ease-in-out forwards;
		animation-delay: calc( 2.8 * var(--transition-time));
	}

	@keyframes vanish {
		from {
			transform: translate(-10%);
			opacity: 0;
		}
		to {
			transform: translate(0);
			opacity: 1;
		}
	}

	.about-me button {
		background: none;
		color: var(--primary);
		font-size: 2rem;
		padding: 5px 35px;
		border: 4px solid var(--primary);
		transform: skewX(-20deg);
	}
</style>