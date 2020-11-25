<script>
	import Line from '../Line.svelte';

	const projectsDelay = 5;
</script>

<section class="projects">
	<div class="projects-wrapper">
		<div class="header">
			<h1 class="title">
				<Line
				  time="var(--transition-time)"
				  color="var(--primary)" 
					distance="100%" 
					position="bottom" 
					origin="left" 
					volumen="4px" delay="calc({projectsDelay + .6} * var(--transition-time))" />
				<Line
				  time="var(--transition-time)"
				  color="var(--primary)" 
					distance="100%" 
					position="right" 
					origin="bottom" 
					volumen="4px" delay="calc({projectsDelay + 1.2} * var(--transition-time))" />
				Projects
			</h1>
		</div>
		<div class="grid">
			<div class="card">
				<div class="img">
					<img src="/images/about.jpg" alt="poll">
				</div>
				<div class="info-section">
					<h2>Poll App</h2>
					<p class="description">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat aut similique laborum dolorem asperiores quo veniam fugit velit molestiae assumenda veritatis ratione reiciendis corrupti rerum, officia animi magni vitae, amet.
					</p>
					<div class="tags"></div>
					<button>Live Example</button>
				</div>
			</div>
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
		margin: 50px 0;
	}

	.projects .projects-wrapper {
		margin: 0 auto;
		width: 90%;
		height: 100%;
	}

	.projects .header .title {
		position: relative;
		display: inline;
		padding: 20px 35px;
		font-size: var(--title-size);
	}


	.grid {
		display: grid;
		grid-template-columns: repeat(4,1fr);
		grid-gap: 20px;
		margin-top: 50px;
	}

	.card {
		background: darkCyan;
		height: 450px;
	}
</style>