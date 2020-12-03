<script>
	import { onMount } from 'svelte';
	import Projects from '../components/projects/Projects.svelte';
	import About from '../components/about/About.svelte';
	import Contact from '../components/contact/Contact.svelte';
	import BackToTheSection from '../components/BackToTheSection.svelte';
	import Loading from '../components/common/Loading.svelte';

	import firebase from 'firebase/app';
	import 'firebase/firestore';

	let projectsArr = [];
	let loadingProjects = true;

	const randomColor = () => {
		const loadingColors = [
			"var(--projects-color)",
			"var(--about-color)",
		]
		const random = Math.ceil(Math.random() * loadingColors.length - 1);
		console.log(random)
		return loadingColors[random];
	}


  // Initialize Firebase
  firebase.initializeApp(JSON.parse(__process.env.firebaseConfig));

  const fetchProjects = async () => {
  	loadingProjects = true;
		const db = firebase.firestore();
		try {
			const ref = await db.collection('projects').get();
			const data = ref.docs.map(doc => doc.data());
			projectsArr = data;
			loadingProjects = false;
		}
		catch(err){
			loadingProjects = false;
			console.error(err)
		}
	}

	onMount(() => fetchProjects());
	

	let active = "";
	const animationDelay = 1500;

	const setActive = (option) => active = option;


</script>

{#if loadingProjects}
	<div class="loading">
		<Loading size="80px" color={randomColor()} />
	</div>
{:else}
	<div class="container" class:active={active !== ""}>
		<BackToTheSection bind:active />
		<section class="section">
			<div 
				on:click|self={() => setActive("projects")}
				href="/" 
				class:active={active === "projects"}
				class="clip projects-clip"
				>
				<div class="title">
					<h2>Projects</h2>
					<p>Check my projects</p>
				</div>
				{#if active === "projects"}
					<Projects {animationDelay} projects={projectsArr} />
				{/if}
			</div>
		</section>
		<section class="section">
			<div 
				on:click|self={() => setActive("about")}
				class:active={active === "about"}
				href="/" 
				class="clip about-clip"
				>
				<div class="title">
					<h2>About</h2>
					<p>Known about me</p>
				</div>
				{#if active === "about"}
					<About bind:active {animationDelay} />
				{/if}
			</div>
		</section>
		<section class="section">
			<div 
				on:click|self={() => setActive("contact")}
				class:active={active === "contact"}
				href="/" 
				class="clip contact-clip"
				>
				<div class="title">
					<h2>Contact</h2>
					<p>Say me hola!</p>
				</div>
				{#if active === "contact"}
					<Contact {animationDelay} />
				{/if}
			</div>
		</section>
	</div>
{/if}

<style>
	.loading {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background: #404040;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background: #111;
		transition: 300ms;
	}

	/* --------- CLIP -------- */

	.container .clip {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 100%;
		transition: var(--transition-time);
	}

	.container .clip::before {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		content: "";
		transition: background-color var(--transition-time);
	}

	.container .clip.projects-clip {
		background-image: url('/images/projects.jpg');
		background-attachment: fixed;
		background-size: cover;
		clip-path: polygon(0 0, 50% 0, 20% 100%, 0% 100%);
	}

	.container .clip.about-clip {
		background-image: url('/images/about.jpg');
		background-attachment: fixed;
		background-size: cover;
		clip-path: polygon(50% 0, 100% 0%, 50% 100%, 20% 100%);
	}

	.container .clip.contact-clip {
		background-image: url('/images/contact.jpg');
		background-attachment: fixed;
		background-size: cover;
		clip-path: polygon(100% 0, 100% 0, 100% 100%, 50% 100%);
	}

	.container .clip.projects-clip .title  {
    left: 5%;
    bottom: 250px;
	 }

	.container .clip.about-clip .title {
	 	right: 25%;
	 	top: 50px;
	 }

	.container .clip.contact-clip .title{
	 	bottom: 10%;
    right: 5%;
	 }

	.container.active .clip {
		transition-delay: calc( 2.3 * var(--transition-delay));
		clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
	}

	.container .clip.active {
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		transition-delay: calc( 3.6 * var(--transition-delay));
	}

	.section:hover .clip::before {
		background-color: rgba(0,0,0, .5);
	}

	/*disabled hover on active section */
	.container.active .section:hover .clip::before {
		background-color: inherit;
	}

	/* --------------- TITLE ----------------- */

	.title {
	 	position: absolute;
		font-size: 2.5rem;
		padding-left: 15px;
		overflow: hidden;
		pointer-events: none;
	}

	.title h2 {
		transition: transform var(--transition-time);
	}

	.title p {
		font-size: 1.4rem;
		color: #d8d8d8;
		font-weight: 300;
		transform: translate(-200%);
		transition: transform var(--transition-time);
	}

	.projects-clip .title::before {
		position: absolute;
		top: 0;
		left: 0;
		content: "";
		width: 5px;
		background: var(--projects-color);
		height: 0;
		transition: 
			height var(--transition-time),
			transform var(--transition-time);
	}

	.about-clip .title::before {
		position: absolute;
		top: 0;
		left: 0;
		content: "";
		width: 5px;
		background: var(--about-color);
		height: 0;
		transition: 
			height var(--transition-time),
			transform var(--transition-time);
	}

	.contact-clip .title::before {
		position: absolute;
		top: 0;
		left: 0;
		content: "";
		width: 5px;
		background: var(--contact-color);
		height: 0;
		transition: 
			height var(--transition-time),
			transform var(--transition-time);
	}

	.section:hover .title::before {
		height: 100%;
	}

	.section:hover .title p {
		transition-delay: var(--transition-delay);
		transform: translate(0);
	}

	/* ------- section active ----- */

	.container .clip.active .title h2 {
		transform: translateY(-200%);
	}
	
	.container .clip.active .title p {
		transition-delay: calc( 1.3 * var(--transition-delay));
		transform: translateY(200%);
	}

	.container .clip.active .title::before {
		transition-delay: calc( 1.7 * var(--transition-delay));
		height: 100%;
		transform: translateY(200%);
	}

	@media (max-width: 520px) {
		.container .clip.projects-clip .title  {
	    left: 10px;
	    bottom: 400px;
		 }

		.container .clip.about-clip .title {
		 	right: 12%;
		 	top: 50px;
		 }

		 .container .title {
			font-size: 1.3rem;
		}

		.container .title p {
			font-size: .9rem;
		}
	}


</style>