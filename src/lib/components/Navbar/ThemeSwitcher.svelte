<script lang="ts">
	import LightIcon from '$lib/components/Icons/LightModeIcon.svelte';
	import DarkIcon from '$lib/components/Icons/DarkModeIcon.svelte';
	import { theme } from '$lib/theme/themeStore';

	let icon: typeof DarkIcon | typeof LightIcon;
	$: icon = $theme === 'light' ? LightIcon : DarkIcon;
</script>

<label for="site-theme">
	<div class="switch-container">
		<svelte:component this={icon} />
	</div>
	<input
		id="site-theme"
		type="checkbox"
		hidden
		checked={$theme === 'dark'}
		on:change={() => {
			theme.update($theme === 'light' ? 'dark' : 'light');
		}}
	/>
</label>

<style>
	.switch-container {
		align-items: center;
		display: flex;
		height: 100%;
		width: auto;
	}

	.switch-container :global(svg) {
		height: 3rem;
		width: 3rem;
		fill: var(--text-color);
	}
</style>
