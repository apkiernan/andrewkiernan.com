<script lang="ts">
	import Switch from './ThemeSwitcher.svelte';
	import { page } from '$app/stores';
	import { theme } from '$lib/theme/themeStore';

	import Logo from '../Icons/Logo.svelte';
	import LogoInverted from '../Icons/LogoInverted.svelte';
</script>

<nav class="nav">
	<div class="nav-brand">
		<a class="brand-link" href="/" aria-label="my logo">
			{#if $theme === 'light'}
				<Logo />
			{:else}
				<LogoInverted />
			{/if}
		</a>
	</div>
	<div class="site-theme-toggle">
		<Switch />
	</div>
	<div>
		<a class="nav-link" class:active={$page.url.pathname.startsWith('/blog')} href="/blog">
			Blog
		</a>
		<a class="nav-link" class:active={$page.url.pathname.startsWith('/projects')} href="/projects">
			Projects
		</a>
		<a class="nav-link" class:active={$page.url.pathname.startsWith('/resume')} href="/resume">
			Resume
		</a>
		<a class="nav-link" class:active={$page.url.pathname.startsWith('/contact')} href="/contact">
			Contact
		</a>
	</div>
</nav>

<style>
	.nav {
		align-items: center;
		display: flex;
		height: 3rem;
		justify-content: space-between;
	}

	.nav-brand {
		display: flex;
		height: 100%;
	}

	.site-theme-toggle {
		flex: 1;
	}

	.brand-link {
		display: flex;
		height: 100%;
		padding: 0.5rem;
		max-width: 5rem;
	}

	.brand-link :global(.logo) {
		height: 100%;
		width: auto;
	}

	.nav-link {
		text-decoration: none;
		font-size: 0.875rem;
		border-bottom: 0.3rem solid transparent;
		color: var(--text-color);
		padding: 1rem;
		padding-bottom: 0.4rem;
	}

	.active {
		border-bottom-color: var(--primary-color);
	}

	@media screen and (min-width: 500px) {
		.nav-link {
			font-size: 1rem;
			padding: 1.5rem;
			padding-bottom: 0.6rem;
		}
	}

	@media screen and (min-width: 768px) {
		.nav {
			height: 5rem;
			padding: 0 4rem;
		}

		.nav-link {
			font-size: 1.125rem;
		}
	}
</style>
