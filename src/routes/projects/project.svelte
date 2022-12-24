<script lang="ts">
	import { fade } from 'svelte/transition';
	export let title: string;
	export let photoUrl: string;
	export let height: number;
	export let width: number;
	export let featureBullets: string;

	function formatBullets(bullets: string) {
		const bulletArray = bullets.split('\n');

		return bulletArray.reduce((prev, bull) => {
			if (bull.length) {
				return [...prev, bull.slice(2)];
			}
			return prev;
		}, [] as string[]);
	}
</script>

<section in:fade={{ duration: 250, delay: 100 }}>
	<div>
		<h1>{title}</h1>
		<div class="grid">
			<img alt="project-home-page" class="project-image" src={photoUrl} {height} {width} />
			<ul>
				{#each formatBullets(featureBullets) as bullet}
					<li>{bullet}</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		margin-bottom: 2rem;
	}

	.project-image {
		border-radius: 10px;
		max-height: 30vh;
	}

	.grid {
		@media screen and (min-width: 625px) {
			display: grid;
			grid-template-columns: 25% 60%;
			grid-gap: 2rem;
		}
	}
</style>
