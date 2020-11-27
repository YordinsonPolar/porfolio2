<script>
	import Line from '../common/Line.svelte';

	import Firebase from '../../icons/firebase.svg';
	import Css3 from '../../icons/css3.svg';
	import Boostrap from '../../icons/bootstrap.svg';
	import GraphQl from '../../icons/graphql.svg';
	import Javascript from '../../icons/javascript.svg';
	import MongoDB from '../../icons/mongodb.svg';
	import Html5 from '../../icons/html-five.svg';
	import Sass from '../../icons/sass.svg';
	import Go from '../../icons/go.svg';
	import Cpp from '../../icons/cplusplus.svg';
	import Rxjs from '../../icons/rxjs-1.svg';

	const iconSize = "25px";
	const iconsAnimationDelay = 300;
</script>

<div class="tools">
	<Line
	  time="var(--transition-time)"
	  color="var(--projects-color)" 
		distance="100%" 
		position="top" 
		origin="left" 
		volumen="4px" delay="calc({2.2} * var(--transition-time))" />
	<div class="icon" data-title="Firebase">
		<Firebase width={iconSize} height={iconSize} />
	</div>
	<div 
		class="icon" 
		data-title="CSS3" 
		style={`--animation-delay: ${iconsAnimationDelay + 50}ms`}
		>
		<Css3 width={iconSize} height={iconSize} />
	</div>
	<div 
		class="icon" 
		data-title="Boostrap" 
		style={`--animation-delay: ${iconsAnimationDelay + 150}ms`}
		>
		<Boostrap width={iconSize} height={iconSize} />
	</div>
	<div 
		class="icon" 
		data-title="GraphQL" 
		style={`--animation-delay: ${iconsAnimationDelay + 250}ms`}
		>
		<GraphQl width={iconSize} height={iconSize} />
	</div>
	<div 
		class="icon" 
		data-title="Javascript" 
		style={`--animation-delay: ${iconsAnimationDelay + 350}ms`}
		>
		<Javascript width={iconSize} height={iconSize} />
	</div>
	<div 
		class="icon" 
		data-title="MongoDB" 
		style={`--animation-delay: ${iconsAnimationDelay + 450}ms`}
		>
		<MongoDB width={iconSize} height={iconSize} />
	</div>
	<div 
		class="icon" 
		data-title="HTML5" 
		style={`--animation-delay: ${iconsAnimationDelay + 550}ms`}
		>
		<Html5 width={iconSize} height={iconSize} />
	</div>
	<div 
		class="icon" 
		data-title="SASS" 
		style={`--animation-delay: ${iconsAnimationDelay + 650}ms`}
		>
		<Sass width={iconSize} height={iconSize} />
	</div>
	<div 
		class="icon" 
		data-title="GO+" 
		style={`--animation-delay: ${iconsAnimationDelay + 750}ms`}
		>
		<Go width={iconSize} height={iconSize} />
	</div>
	<div 
		class="icon" 
		data-title="C++" 
		style={`--animation-delay: ${iconsAnimationDelay + 850}ms`}
		>
		<Cpp width={iconSize} height={iconSize} />
	</div>
	<div 
		class="icon" 
		data-title="Rxjs" 
		style={`--animation-delay: ${iconsAnimationDelay + 950}ms`}
		>
		<Rxjs width={iconSize} height={iconSize} />
	</div>
</div>

<style>
	.tools {
		width: 100%;
		display: flex;
		flex-flow: wrap;
		padding: 5px 5px;
		position: relative;
	}

	.icon {
		--animation-delay: 0;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 50px;
		border: 4px solid #fff;
		border-radius: 2px;
		margin-left: 12px;
		margin-top: 25px;
		transform: scale(0);
		animation: vanish 700ms forwards ease;
		animation-delay: var(--animation-delay);
	}


	@keyframes vanish {
		0% {
		transform: scale(0);
		}

		50% {
			transform: scale(1.2);
		}

		100% {
		transform: scale(1);
		}
	}

	.icon::before {
    position: absolute;
    content: attr(data-title);
    font-size: 13px;
    bottom: -8px;
    left: 50%;
    font-weight: 600;
    opacity: 0;
    transform: translate(-50%, 100%);
    visibility: none;
    transition: 
    	var(--transition-time) opacity,
    	var(--transition-time) visibility;
	}

	.icon:hover::before {
		opacity: 1;
		visibility: visible;
		color: var(--projects-color);
	}

	.icon:hover {
		border-color: var(--projects-color);
	}

	.icon-color {
		fill: red;
	}
</style>