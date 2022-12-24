<script lang="ts">
	import { fade } from 'svelte/transition';
	import SVG from 'svelte-inline-svg';

	import email from '$lib/img/social/email.svg';
	import github from '$lib/img/social/github-icon.svg';
	import twitter from '$lib/img/social/twitter.svg';
</script>

<section in:fade={{ delay: 250, duration: 200 }}>
	<div>
		<h1>Contact</h1>
		<p>
			Looking to build a new site or web app? Want to talk about why the Celtics are the best team
			in the NBA? Just want to say hi? Feel free to contact me through the platforms listed below
		</p>
		<section>
			<div class="icon-container">
				<SVG src={email} fill="var(--primary-color)" />
			</div>
			<a class="external" href="mailto:apkiernan@gmail.com">Shoot me an email</a>
		</section>
		<section>
			<div class="icon-container">
				<SVG src={github} fill="var(--primary-color)" />
			</div>
			<a class="external" href="https://github.com/apkiernan">Find me on GitHub</a>
		</section>
		<section>
			<div class="icon-container">
				<SVG src={twitter} fill="var(--primary-color)" />
			</div>
			<a class="external" href="https://twitter.com/apkiernan"
				>Find me on Twitter (I don't tweet at all, but my DMs are open)</a
			>
		</section>
	</div>
</section>

<style lang="scss">
	section {
		align-items: center;
		display: flex;
		justify-content: flex-start;
		padding: 1rem;
	}

	.icon-container {
		margin-right: 2rem;
		flex: 1;
	}

	.external {
		flex: 10;
	}
</style>
