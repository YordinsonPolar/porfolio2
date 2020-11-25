<script>
	import Line from '../common/Line.svelte';
	import ProjectsCard from './ProjectCard.svelte';

	const projectsDelay = 5;

</script>

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
					volumen="4px" delay="calc({projectsDelay + .6} * var(--transition-time))" />
				<Line
				  time="var(--transition-time)"
				  color="var(--projects-color)" 
					distance="100%" 
					position="right" 
					origin="bottom" 
					volumen="4px" delay="calc({projectsDelay + 1.2} * var(--transition-time))" />
				Projects
			</h1>
		</div>
		<div class="grid">
			<ProjectsCard />
			<ProjectsCard />
			<ProjectsCard />
			<ProjectsCard />
			<ProjectsCard />
		</div>
	</div>
</section>

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

	.projects .header .title {
		position: relative;
		display: inline;
		padding: 20px 35px 20px 0;
		font-size: var(--title-size);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax( 320px,1fr));
		grid-gap: 50px;
		margin-top: 50px;
	}

</style>