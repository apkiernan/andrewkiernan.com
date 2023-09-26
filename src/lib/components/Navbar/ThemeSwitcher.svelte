<script lang="ts">
	import lightIcon from '$lib/img/light-mode-icon.svg';
	import darkIcon from '$lib/img/dark-mode-icon.svg';

	export let theme: 'light' | 'dark';
	let icon: string;
	$: icon = theme === 'light' ? lightIcon : darkIcon;
</script>

<label for="site-theme">
	<div class="switch-container">
		{icon}
	</div>
	<input
		id="site-theme"
		type="checkbox"
		hidden
		checked={theme === 'dark'}
		on:change={() => {
			theme === 'light' ? 'dark' : 'light';
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
</style>
