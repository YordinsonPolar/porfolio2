<script>
	import { onDestroy } from 'svelte';
	import Line from '../common/Line.svelte';
	import Button from '../common/Button.svelte';

	export let active;

	const timeout = null;
	const changeToProjectsSection = () => {
		active = "";
		setTimeout(() => {
			active = "projects";
		},1000)
	};

	onDestroy(() => clearTimeout(timeout))
</script>

<div class="about-me">
	<Line
	  time="var(--transition-time)"
	  color="var(--about-color)" 
		distance="100%" 
		position="left" 
		origin="center" 
		volumen="4px" delay="calc( 1.6 * var(--transition-time))"/>
	<Line
	  time="var(--transition-time)"
	  color="var(--about-color)" 
		distance="55px" 
		position="top" 
		origin="left" 
		volumen="4px" delay="calc( 2 * var(--transition-time))" />
	<Line
	  time="var(--transition-time)"
	  color="var(--about-color)" 
		distance="103px" 
		position="bottom" 
		origin="left" 
		volumen="4px" delay="calc( 2 * var(--transition-time))" />

	<h1>About</h1>
	<div>
		<span class="line">
			<Line
			  time="var(--transition-time)"
			  color="var(--about-color)" 
				distance="100%" 
				position="bottom" 
				origin="left" 
				volumen="4px" delay="calc( 2 * var(--transition-time))" />
		</span>
		<p class="sinopsis">
			I'm <span>Yordinson Polar</span>, a self-taught programmer who lives in Caracas-Venezuela.
			<br/>
			<br/>
			I'm a person passionate about programming who likes to solve problems, with more experience in <span>frontend</span> with <span>ReactJs</span>, I am currently learning reactive programming and my main interest is Fullstack applications.
			<br/>
			<br/>
			One of my main interests when I program is the efficiency of the web pages. My love for <span>Svelte</span> was born there.
			<br/>
			<br/>
			when I'm not coding I spend my free time in literature and occasionally play guitar.
		</p>
	</div>
	
	<div 
		on:click={changeToProjectsSection}
		class="projects-button">
		<Button label="Projects" size="25px" color="var(--about-color)" />	
	</div>
</div>

<style>
	.about-me {
		--timeDelay: 3;
		--delay: calc( var(--timeDelay) * var(--transition-time));
		position: relative;
		padding-left: 80px;
		padding-right: 40px;
		min-height: 500px;
	}

	.about-me h1 {
		position: relative;
		top: -48px;
		left: 0;
		width: 80%;
		font-size: var(--title-size);
		opacity: 0;
		border-bottom: 1px solid var(--about-color);
		animation: vanish var(--transition-time) ease-in-out forwards;
		animation-delay: var(--delay);
	}

	.about-me h1::first-letter {
		color: var(--about-color);
		font-size: 5rem;
	}

	.about-me div {
		position: relative;
		font-size: 1.5rem;
	}

	.about-me div .line {
		position: absolute;
		top: 50%;
		left: -78px;
		width: 35px;
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

	.sinopsis span {
		color: var(--about-color);
		font-weight: bold;
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
			min-height: 330px;
			padding-bottom: 40px;
		}

		.about-me div .sinopsis  {
			margin-bottom: 10px;
			font-size: 1.2rem;
		}
	}

	@media (max-width: 900px) {
		.about-me {
			margin-top: 90px;
			margin-bottom: 30px;
		}
	}
</style>