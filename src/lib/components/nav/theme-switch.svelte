<script lang="ts">
	import SVG from 'svelte-inline-svg';

	import { themeStore, type Theme } from '$lib/stores/theme';
	import darkIcon from '$lib/img/dark-mode-icon.svg';
	import lightIcon from '$lib/img/light-mode-icon.svg';

	function handleUpdateTheme(theme: Theme) {
		if (theme === 'light') {
			themeStore.set('dark');
			document.body.classList.add('theme-dark');
			document.body.classList.remove('theme-light');
		} else {
			themeStore.set('light');
			document.body.classList.add('theme-light');
			document.body.classList.remove('theme-dark');
		}
	}
</script>

<button on:click={() => handleUpdateTheme($themeStore)}>
	{#if $themeStore === 'light'}
		<SVG src={lightIcon} height="48" width="48" fill="var(--text-color)" />
	{:else}
		<SVG src={darkIcon} height="48" width="48" fill="var(--text-color)" />
	{/if}
</button>

<style lang="scss">
	button {
		background: none;
		border: none;
		height: 100%;
	}
</style>
