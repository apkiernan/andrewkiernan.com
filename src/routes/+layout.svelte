<script lang="ts">
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
</script>

<main>
	<Navbar />
	<div class="content">
		<slot />
	</div>
	<Footer />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.content {
		flex: 1;
		margin: 0 auto;
		width: 100%;
		max-width: 1000px;
		padding: 2rem;
	}
</style>
