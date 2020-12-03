<script>
	import { onDestroy } from 'svelte';
	import Line from '../common/Line.svelte';
	import ProjectsCard from './ProjectCard.svelte';
	import Tools from './Tools.svelte';

	export let projects;
	export let animationDelay = 0;

	let animationDone = false;
	let cardAnimation = false;

	const introAnimationDone = setTimeout(()=>{
		animationDone = true;
	}, animationDelay);

	const cardsDelay = setTimeout(()=>{
		cardAnimation = true;
	}, animationDelay * 1.5);

	onDestroy(() => {
		clearTimeout(cardsDelay);
		clearTimeout(introAnimationDone);
	});

</script>


{#if animationDone}
	<section class="projects">
		<div class="projects-wrapper">
			<div class="header">
				<span class="tools-title">Technologies I've known and used</span>
				<h2 class="title">
					<Line
					  time="var(--transition-time)"
					  color="var(--projects-color)" 
						distance="100%" 
						position="bottom" 
						origin="left" 
						volumen="4px" delay="calc({0.6} * var(--transition-time))" />
					<Line
					  time="var(--transition-time)"
					  color="var(--projects-color)" 
						distance="100%" 
						position="right" 
						origin="bottom" 
						volumen="4px" delay="calc({1.2} * var(--transition-time))" />
					Projects
				</h2>
				<Tools />
			</div>
			<div class="grid">
				<Line
				  time="var(--transition-time)"
				  color="var(--projects-color)" 
					distance="100%" 
					position="left" 
					origin="top" 
					volumen="4px" delay="calc({0.6} * var(--transition-time))" />
					{#if cardAnimation}
							{#each projects as { title, imageUrl, description, tools, githubUrl, websiteUrl }, i}
								<ProjectsCard
									{title}
									{imageUrl}
									{description}
									{tools}
									{githubUrl}
									{websiteUrl}
									animationDelay={(i + 1) * 300} />
							{/each}
					{/if}
			</div>
		</div>
		<a href="https://github.com/Daniel-Vnzla?tab=repositories" target="_blank" class="more-projects-btn">
			More projects
		</a>
	</section>
{/if}

<style>
	.projects {
		position: relative;
		font-size: var(--title-size);
		position: relative;
		width: 100%;
		min-height: 100vh;
		display: grid;
		align-items: center;
		padding: 80px 0;
		background: var(--section-bg);
	}

	.projects .projects-wrapper {
		margin: 0 auto;
		width: 85%;
		height: 100%;
	}

	.projects .header {
		position: relative;
		display: flex;
	}

	.tools-title {
		position: absolute;
    top: -30px;
    left: 245px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #b9b9b9;
    animation: vanish calc( 2 * var(--transition-time)) ease-out;
	}

	.projects .header .title {
		position: relative;
		display: inline;
		padding: 20px 35px 20px 0;
		font-size: var(--title-size);
		animation: vanish var(--transition-time) ease-out;
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

	.grid {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax( 320px,1fr));
		grid-gap: 50px;
		padding-left: 25px;
		padding-top: 50px;
	}

	.more-projects-btn {
		margin-top: 50px;
		color: var(--projects-color);
		font-weight: bold;
		text-align: center;
		font-size: 1.4rem;
		opacity: 0;
		animation: vanish var(--transition-time) ease-out forwards;
		animation-delay: 2s;
	}

	@media (max-width: 620px) {
		.projects .header {
			width: 80%;
			display: flex;
			flex-direction: column;
		}

		.grid {
			display: flex;
			flex-direction: column;
		}

		.tools-title {
			display: none;
		} 
	}

</style>