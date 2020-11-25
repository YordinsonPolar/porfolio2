<script>
	import Marco from '../common/Marco.svelte';
	import Button from '../common/Button.svelte';

	const tags = ['Svelte','MongoDB','JWT', "CSS", "HTML", "Javascript", "NodeJS"]
</script>

<div class="card">
	<Marco aboutDelay="1" color="var(--projects-color)"/>
	<div class="card-wrapper">
		<div class="img">
			<img src="/images/about.jpg" alt="poll">
		</div>
		<div class="info-section">
			<div class="bg-effect"></div>
			<div class="info-section-wrapper">
				<h2 class="title">Poll App</h2>
				<h6 class="description-title">Description</h6>
				<p class="description">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat aut similique laborum dolorem asperiores quo veniam fugit velit molestiae assumenda veritatis ratione reiciendis corrupti rerum, officia animi magni vitae, amet.
				</p>
				<div class="tags">
					<p class="tags-title">Tools: </p>
					{#each tags as tag }
						<p class="tag">{tag}</p>
					{/each}
				</div>
				<div class="example-btn">
					<Button label="Live Example" size="14px" color="var(--projects-color)"/>
				</div>
				
			</div>
		</div>
	</div>
</div>

<style>

	.card {
		position: relative;
	}

	.card .card-wrapper {
		position: relative;
		background: #292929;
		transition: 200ms transform;
	}

	.card .card-wrapper:hover {
		transform: scale(1.04);
	}

	.card .card-wrappe .img {
		min-height: 300px;
	}

	.card .card-wrapper .info-section {
		position: relative;
		padding: 15px;
		overflow: hidden;
	}

	.card .card-wrapper .info-section .info-section-wrapper {
		position: relative;
	}

	.card .card-wrapper .info-section .bg-effect {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;	
		bottom: 0;
		content: "";
		background: linear-gradient(to bottom right, #292929 50%, #383838 0%);
		transform: translate(100%,100%);
		transition: var(--transition-time) transform ease-in-out;
	}

	.card .card-wrapper:hover .bg-effect {
		transform: translate(0, 0);
	}

	.card .card-wrapper .info-section .title {
		color: var(--projects-color);
		font-size: calc(var(--title-size) / 1.6);
	}

	.card .card-wrapper .info-section .description-title {
		font-size: 1.2rem;
		margin-top: 20px;
		margin-bottom: 5px;
	}

	.card .card-wrapper .info-section .description {
		font-size: 1rem;
		margin-bottom: 20px;
	}

	.card .card-wrapper .info-section .tags-title {
		font-weight: bold;
		font-size: 1.2rem;
		padding: 5px 0;
		margin-right: 5px;
	}

	.card .card-wrapper .info-section .tags {
		display: flex;
		flex-wrap: wrap;
	}

	.card .card-wrapper .info-section .tag {
		border-radius: var(--border-radius);
		font-size: .9rem;
		padding: 5px 8px;
		font-weight: 600;
		margin-left: 5px;
		margin-top: 5px;
		color: #d4d4d4;
		background: #1f1f1f;
	}

	.card .card-wrapper .info-section .example-btn {
		display: table;
		margin-left: auto;
	}
</style>