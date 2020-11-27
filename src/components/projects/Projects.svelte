<script>
	import { onDestroy } from 'svelte';
	import Line from '../common/Line.svelte';
	import ProjectsCard from './ProjectCard.svelte';
	import Tools from './Tools.svelte';

	const projectsDelay = 1500;
	let animationDone = false;

	const cards = [1,2,3,4,5,6];

	const delay = setTimeout(()=>{
		animationDone = true;
	}, projectsDelay);

	onDestroy(() => clearTimeout(delay));
</script>


{#if animationDone}
	<section class="projects">
		<div class="projects-wrapper">
			<div class="header">
				<h1 class="title">
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
				</h1>
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
				{#each cards as card, i}
					<ProjectsCard animationDelay={(i + 1) * 300} />
				{/each}
			</div>
		</div>
	</section>
{/if}

<style>
	.projects {
		position: relative;
		font-size: var(--title-size);
		position: relative;
		width: 100%;
		min-height: 100%;
		display: grid;
		align-items: center;
		padding: 80px 0;
		background: rgba(0,0,0, .5);
	}

	.projects .projects-wrapper {
		margin: 0 auto;
		width: 85%;
		height: 100%;
	}

	.projects .header {
		display: flex;
	}

	.projects .header .title {
		position: relative;
		display: inline;
		padding: 20px 35px 20px 0;
		font-size: var(--title-size);
	}

	.grid {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax( 320px,1fr));
		grid-gap: 50px;
		padding-left: 25px;
		padding-top: 50px;
	}

</style>