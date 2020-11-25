<script>
	import Button from '../common/Button.svelte';


	const tags = ['SVELTE','MONGODB','JWT', "CSS", "HTML", "JAVASCRIP"]
</script>

<div class="card">
	<div class="img">
		<img src="/images/about.jpg" alt="poll">
	</div>
	<div class="info-section">
		<h2 class="title">Poll App</h2>
		<p class="description">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat aut similique laborum dolorem asperiores quo veniam fugit velit molestiae assumenda veritatis ratione reiciendis corrupti rerum, officia animi magni vitae, amet.
		</p>
		<div class="tags">
			<p class="tags-title">Tags: </p>
			{#each tags as tag }
				<p class="tag">{tag}</p>
			{/each}
		</div>
		<div class="example-btn">
			<Button label="Live Example" size="14px"/>
		</div>
	</div>
</div>

<style>
	.card {
		background: #2d2c2c;
	}

	.card .info-section {
		padding: 15px;
	}

	.card .info-section .title {
		font-size: 1.4rem;
	}

	.card .info-section .description {
		font-size: 1rem;
		margin: 20px 0;
	}

	.card .info-section .tags-title {
		font-weight: bold;
		font-size: 1rem;
		padding: 5px 0;

	}

	.card .info-section .tags {

		display: flex;
		flex-wrap: wrap;
	}

	.card .info-section .tag {
		border-radius: var(--border-radius);
		font-size: 1rem;
		padding: 5px 12px;
		font-weight: 500;
		margin-left: 5px;
		margin-top: 3px;
		background: #000;
	}

	.card .info-section .example-btn {
		display: table;
		margin-left: auto;
	}
</style>