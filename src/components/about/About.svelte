<script>
	import Line from '../../components/Line.svelte';


	const lazyLodingImg = ({ target }) => {
		target.style.transform = "translateX(0)"
		target.style.opacity = 1
	};
</script>

<section class="about">
	<div class="about-wrapper">
		<div class="perfil">
			<span class="marco">
				<Line
				  time="var(--transition-time)"
				  color="var(--primary)" 
					distance="100%" 
					position="left" 
					origin="bottom" 
					volumen="4px" />
				<Line
				  time="var(--transition-time)"
				  color="var(--primary)" 
					distance="100%" 
					position="bottom" 
					origin="left" 
					volumen="4px"/>
				<Line
				  time="var(--transition-time)"
				  color="var(--primary)" 
					distance="100%" 
					position="right" 
					origin="bottom" 
					volumen="4px" delay="calc( .8 * var(--transition-time))" />
				<Line
				  time="var(--transition-time)"
				  color="var(--primary)" 
					distance="100%" 
					position="top" 
					origin="left" 
					volumen="4px" delay="calc( .8* var(--transition-time))" />
			</span>
			<img class="img" on:load={lazyLodingImg} src="/images/about.jpg" alt="Yordinson Polar">
		</div>
		<span class="line">
			<Line
			  time="var(--transition-time)"
			  color="var(--primary)" 
				distance="40px" 
				position="bottom" 
				origin="left" 
				volumen="4px" delay="calc( 1.4 * var(--transition-time))" />
		</span>
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

	.about-wrapper {
		background: rgba(0,0,0,.5);
		width: 90%;
		height: 90%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.perfil {
		position: relative;
		width: 500px;
		height: 450px;
	}

	.marco {
		position: absolute;
		top: 0px;
		left: 0;
		right: 0;
		bottom: 0;
		transform: translate(-10%, 6%);
	}

	.line {
		position: relative;
		width: 60px;
		height: 4px;
		margin-right: 5px;
	}
	.about-me {
		position: relative;
		padding: 0 50px;
		height: 70%;
	}
	:root {
		--primary: #f5e574;
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
		font-size: 1.5rem;
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