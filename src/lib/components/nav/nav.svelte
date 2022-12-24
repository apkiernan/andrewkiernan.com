<script lang="ts">
	import { page } from '$app/stores';
	import ThemeToggle from '$lib/components/nav/theme-switch.svelte';
	import NavBrand from '$lib/components/nav/nav-brand.svelte';
</script>

<nav>
	<div class="nav-brand">
		<NavBrand />
		<ThemeToggle />
	</div>
	<ul>
		<li><a class:active={$page?.route?.id?.startsWith('/blog')} href="/blog">Blog</a></li>
		<li>
			<a class:active={$page?.route?.id?.startsWith('/projects')} href="/projects">Projects</a>
		</li>
		<li><a class:active={$page?.route?.id?.startsWith('/resume')} href="/resume">Resume</a></li>
		<li><a class:active={$page?.route?.id?.startsWith('/contact')} href="/contact">Contact</a></li>
	</ul>
</nav>

<style lang="scss">
	nav {
		display: flex;
		padding: 0 4rem;
		justify-content: space-between;
	}

	.nav-brand {
		height: 5rem;
		display: flex;
	}

	ul {
		list-style: none outside;
		display: flex;
		align-items: center;

		li {
			display: flex;
		}
		a {
			border-bottom: 0.3rem solid transparent;
			color: var(--text-color);
			padding: 1.5rem;
			padding-bottom: 0.6rem;
			text-decoration: none;

			&.active {
				border-bottom-color: var(--primary-color);
			}
		}
	}
</style>
