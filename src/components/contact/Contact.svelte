<script>
	import { onDestroy } from 'svelte';

	import ContactForm from './ContactForm.svelte';
	import Marco from '../common/Marco.svelte';
	import Line from '../common/Line.svelte';

	export let animationDelay = 0;
	let animationDone = false;

	const introAnimationDone = setTimeout(()=>{
		animationDone = true;
	}, animationDelay);

	onDestroy(() => clearTimeout(introAnimationDone));
</script>

{#if animationDone}
	<section class="contact">
		<div class="sections">
			<ContactForm />
				<span class="line">
					<Line
					  time="var(--transition-time)"
					  color="var(--contact-color)" 
						distance="100%" 
						position="bottom" 
						origin="left" 
						volumen="4px" delay="calc(3.6 * var(--transition-time))" />
				</span>
			<div class="map">
				<Marco color="var(--contact-color)"  position="right" />
				<img src="/images/about.jpg" alt="mapa">
			</div>
		</div>
	</section>
{/if}


<style>
	.contact {
		width: 100%;
		height: 100vh;
	}

	.contact .sections {
		width: 90%;
		margin: 0 auto;
		display: grid;
		align-items: center;
		height: 100%;
		grid-template-columns: 15fr 2fr 10fr;
	}
	
	.line {
		position: relative;
		height: 4px;
	}

	.contact .sections .map {
		position: relative;
	}

	.contact .sections .map img {
		position: relative;
		height: 600px;
		opacity: 0;
		animation: vanish var(--transition-time) ease-in-out forwards;
		animation-delay: 1800ms;
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
</style>

