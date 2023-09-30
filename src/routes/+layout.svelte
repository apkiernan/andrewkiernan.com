<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import { onDestroy, onMount } from 'svelte';
	import type { PageData } from './$types';
	import { theme } from '$lib/theme/themeStore';
	import type { Unsubscriber } from 'svelte/store';

	export let data: PageData;

	let unsub: Unsubscriber;

	onMount(() => {
		if (data.theme === 'light') {
			theme.set('light');
			document.body.classList.add('theme-light');
		} else {
			theme.set('dark');
			document.body.classList.add('theme-dark');
		}

		unsub = theme.subscribe((t) => {
			if (t === 'light') {
				document.body.classList.remove('theme-dark');
				document.body.classList.add('theme-light');
			} else {
				document.body.classList.remove('theme-light');
				document.body.classList.add('theme-dark');
			}
		});
	});

	onDestroy(() => {
		unsub?.();
	});
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
