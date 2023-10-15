<script lang="ts">
	import Image from '$lib/components/Image/Image.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	{#each data.projects as project}
		<section class="section">
			<div>
				<h1>{project.title}</h1>
				<div class="grid">
					<Image
						class="image"
						src={project.photos[0].url}
						placeholder={project.photos[0].blur}
						alt={`Cover photo for ${project.title}`}
					/>
					{@html project.content}
				</div>
			</div>
		</section>
	{/each}
</div>

<style>
	@media screen and (min-width: 625px) {
		.grid {
			gap: 2rem;
			display: grid;
			grid-template-columns: 40% 60%;
		}
	}

	.section {
		margin-bottom: 2rem;
	}

	.grid :global(.image) {
		border-radius: 10px;
		height: 100%;
		width: 100%;
	}
</style>
