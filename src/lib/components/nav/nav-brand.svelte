<script lang="ts">
	import SVG from 'svelte-inline-svg';

	import darkLogo from '$lib/img/logo-inverted.svg';
	import lightLogo from '$lib/img/logo.svg';
	import { themeStore } from '$lib/stores/theme';
</script>

<a href="/" class="brand-link">
	{#if $themeStore === 'light'}
		<SVG src={lightLogo} height="100%" width="100%" />
	{:else}
		<SVG src={darkLogo} height="100%" width="100%" />
	{/if}
</a>

<style>
	.brand-link {
		height: 100%;
		padding: 0.5rem;
	}
</style>
