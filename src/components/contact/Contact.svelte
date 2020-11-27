<script>
	import Button from '../common/Button.svelte';
	import Line from '../common/Line.svelte';
	import Marco from '../common/Marco.svelte';

	const values = {
		name: "",
		email: "",
		subject: "",
		message: "",
	}
</script>

<section class="contact">
	<div class="sections">
		<div class="form">
			<h2 class="title">contact</h2>
			<div class="line-right">
				<Line
				  time="var(--transition-time)"
				  color="var(--contact-color)" 
					distance="100%" 
					position="left" 
					origin="top" 
					volumen="4px" delay="calc(1.2 * var(--transition-time))" />
			</div>
			<form>
				<Line
				  time="var(--transition-time)"
				  color="var(--contact-color)" 
					distance="100%" 
					position="top" 
					origin="center" 
					volumen="4px" delay="calc(2.2 * var(--transition-time))" />
				<Line
				  time="var(--transition-time)"
				  color="var(--contact-color)" 
					distance="100%" 
					position="left" 
					origin="top" 
					volumen="4px" delay="calc(3.2 * var(--transition-time))" />
				<Line
				  time="var(--transition-time)"
				  color="var(--contact-color)" 
					distance="255px" 
					position="bottom" 
					origin="left" 
					volumen="4px" delay="calc(4.2 * var(--transition-time))" />
				<Line
				  time="var(--transition-time)"
				  color="var(--contact-color)" 
					distance="124px" 
					position="right" 
					origin="top" 
					volumen="4px" delay="calc(3.2 * var(--transition-time))" />

				<div class="custom-input name">
					<input type="text" name="name" bind:value={values.name} placeholder="Name" />
				</div>
				<div class="custom-input email">
					<input type="text" name="email" bind:value={values.email} placeholder="Email" />
				</div>
				<div class="custom-input subject">
					<input type="text" name="subject" bind:value={values.subject} placeholder="Subject" />
				</div>
				<div class="custom-input message">
					<textarea type="text" name="message" bind:value={values.message} placeholder="Message" />
				</div>
				<div class="button">
					<Button label="Send email" size="25px" color="var(--contact-color)"/>
				</div>
			</form>
		</div>
			<span class="line">
				<Line
				  time="var(--transition-time)"
				  color="var(--contact-color)" 
					distance="100%" 
					position="bottom" 
					origin="left" 
					volumen="4px" delay="calc(2.2 * var(--transition-time))" />
			</span>
		<div class="map">
			<Marco color="var(--contact-color)"  position="right" />
			<img src="/images/about.jpg" alt="mapa">
		</div>
	</div>
</section>


<style>
	.contact {
		width: 100%;
		height: 100vh;
	}

	.contact .title {
		text-align: center;
		font-size: var(--title-size);
	}

	.contact .sections {
		width: 90%;
		margin: 0 auto;
		display: grid;
		align-items: center;
		height: 100%;
		grid-template-columns: 15fr 2fr 10fr;
	}

	.contact .sections .form form {
		padding: 40px;
		position: relative;
		display: grid;
		grid-gap: 15px;
		grid-template-columns: repeat(2,1fr);
	}
	.contact .sections .form .custom-input textarea,
	.contact .sections .form .custom-input input {
		outline: none;
		padding: 10px 20px;
		font-size: 1.3rem;
		width: 100%;
		background: #a993ec9e;
		border: none;
		border-radius: var(--border-radius);
		color: #fff;
	}

	.contact .sections .form .custom-input textarea {
		resize: none;
		height: 150px;
		margin-bottom: 20px;
	}

	::placeholder {
		color: rgba(255,255,255, .7);
	}

	.contact .sections .form .message,
	.contact .sections .form .subject {
		grid-column: 1 / 3;
	}

	.contact .sections .form .button {
		position: absolute;
		bottom: -30px;
		left: 250px;
		z-index: 5;
		opacity: 0;
		animation: vanish var(--transition-time) ease-in-out forwards;
		animation-delay: 2s;
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

	.line {
		position: relative;
		height: 4px;
	}

	.line-right {
		position: relative;
		width: 4px;
		height: 50px;
		margin: 0 auto;
	}

	.contact .sections .map {
		position: relative;
	}

	.contact .sections .map img {
		position: relative;
		height: 600px;
	}
</style>

