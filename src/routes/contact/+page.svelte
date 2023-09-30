<script lang="ts">
	import Email from '$lib/img/social/email.svelte';
	import Github from '$lib/img/github.svelte';
	import Twitter from '$lib/img/social/twitter.svelte';
</script>

<section class="section">
	<div>
		<div>
			<h1>Contact</h1>
			<p>
				Looking to build a new site or web app? Want to talk about why the Celtics are the best team
				in the NBA? Just want to say hi? Feel free to contact me through the platforms listed below
			</p>
			<section class="section">
				<div class="iconContainer">
					<Email />
				</div>
				<a class="externalLink" href="mailto:apkiernan@gmail.com"> Shoot me an email </a>
			</section>
			<section class="section">
				<div class="iconContainer">
					<Github />
				</div>
				<a class="externalLink" href="https://github.com/apkiernan"> Find me on Github </a>
			</section>
			<section class="section">
				<div class="iconContainer">
					<Twitter />
				</div>
				<a class="externalLink" href="https://twitter.com/apkiernan">
					Find me on Twitter (I don&apos;t tweet at all, but my DMs are open)
				</a>
			</section>
		</div>
	</div>
</section>

<style>
	.section {
		align-items: center;
		display: flex;
		justify-content: flex-start;
		padding: 1rem;
	}

	.externalLink {
		flex: 10;
	}

	.iconContainer {
		margin-right: 2rem;
		flex: 1;
	}

	.iconContainer :global(svg) {
		fill: var(--primary-color);
	}
</style>
