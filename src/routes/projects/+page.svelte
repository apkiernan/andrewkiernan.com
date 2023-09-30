<script lang="ts">
	import type { PageData } from './$types';
	import { parseMarkdown } from './parseMarkdown';

	export let data: PageData;

	$: console.log(data.projects);
</script>

<div>
	{#each data.projects as project}
		<section class="section">
			<div>
				<h1>{project.title}</h1>
				<div class="grid">
					<img
						class="image"
						src={project.photos[0].url.url}
						width={project.photos[0].width}
						height={project.photos[0].height}
						alt={`Cover photo for ${project.title}`}
					/>
					{@html parseMarkdown(project.featureBullets)}
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

	.image {
		border-radius: 10px;
	}
</style>
