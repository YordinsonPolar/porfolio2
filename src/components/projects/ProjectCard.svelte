<script>
	import { fade } from 'svelte/transition';
	import Marco from '../common/Marco.svelte';
	import Button from '../common/Button.svelte';
	import Github from '../../icons/github.svg';

	export let title;
	export let description;
	export let tools;
	export let imageUrl;
	export let websiteUrl;
	export let githubUrl;

	export let animationDelay = 0;
	const tags = ['Svelte','MongoDB','JWT', "CSS", "HTML", "Javascript", "NodeJS"]

	const lazyLodingImg = ({ target }) => {
		target.style.opacity = 1
	};
</script>

<div class="card" style={`--animation-delay: ${animationDelay}ms`}>
	<Marco color="var(--projects-color)"/>
	<div class="card-wrapper">
		<div class="img">
			<img on:load={lazyLodingImg} src={imageUrl} alt={title}>
		</div>
		<div class="info-section">
			<div class="bg-effect"></div>
			<div class="info-section-wrapper">
				<h2 class="title">{title}</h2>
				<h6 class="description-title">Description</h6>
				<p class="description">{description}</p>
				<div class="tags">
					<p class="tags-title">Tools: </p>
					{#each tools as tag }
						<p class="tag">{tag}</p>
					{/each}
				</div>
				<div class="actions">
					<a href={githubUrl} title="Github" target="_blank" class="github-icon">
						<Github width="100%" height="100%" />
					</a>
					<a href={websiteUrl} target="_blank" class="example-btn">
						<Button label="Live Example" size="14px" color="var(--projects-color)"/>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>

	.card {
		--animation-delay: 0;
		position: relative;
		opacity: 0;
		transform: translateX(-10px);
		animation: vanish 700ms forwards;
		animation-delay: var(--animation-delay);
	}

	@keyframes vanish {
		from {
			transform: translateX(-10px);
			opacity: 0;
		}
		to {
			transform: translateX(0);
			opacity: 1;
		}
	}

	.card .card-wrapper {
		position: relative;
		background: #292929;
	}

	.card .card-wrapper .img {
		height: 220px;
	}

	.card .card-wrapper .img img {
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity var(--transition-time);
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
		font-size: calc(var(--title-size) / 1.8);
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

	.actions {
		margin-top: 35px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
	}

	.github-icon {
		width: 32px;
		height: 38px;
	}

</style>