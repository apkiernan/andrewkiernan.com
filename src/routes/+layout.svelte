<script lang="ts">
	import Footer from '$lib/components/footer/footer.svelte';
	import Nav from '$lib/components/nav/nav.svelte';
</script>

<svelte:head>
	<title>A Boston based web developer specializing in performant web applications</title>
</svelte:head>
<main>
	<Nav />
	<div class="container">
		<slot />
	</div>
	<Footer />
</main>

<style lang="scss">
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}
	:global(.theme-dark) {
		--primary-color: #729fe3;
		--background-color: #282c35;
		--text-color: #fff;
		--link-color: #729fe3;
		--code-color: #ff7ba4;
	}
	:global(.theme-light) {
		--primary-color: #08234f;
		--background-color: #fafafa;
		--text-color: #333;
		--link-color: #08234f;
		--code-color: #d5057a;
	}
	:global(html) {
		font-size: 16px;
		font-family: 'Poppins', sans-serif;
	}
	:global(body) {
		background: var(--background-color);
		color: var(--text-color);
		margin: 0;
	}
	:global(p) {
		font-size: 1rem;

		@media screen and (min-width: 500px) {
			font-size: 1.25rem;
		}
	}
	:global(a) {
		color: var(--link-color);
	}

	:global(img) {
		max-width: 100%;
	}

	:global(h1, h2, h3, h4, h5, h6, p) {
		margin-top: 0;
	}

	:global(h2) {
		font-size: 1.5rem;
		@media screen and (min-width: 500px) {
			font-size: 2rem;
		}
	}

	:global(code) {
		color: var(--code-color);
	}

	:global(body > div:first-child) {
		display: flex;
		flex-direction: column;
	}

	:global(button, a) {
		outline: none;
	}

	main {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.container {
		flex: 1;
		padding: 2rem 4rem;
	}
</style>
