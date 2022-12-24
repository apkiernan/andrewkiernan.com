<script lang="ts">
	import type { PageData } from './$types';
	import Project from './project.svelte';

	export let data: PageData;
</script>

{#each data.projects as project}
	<Project
		title={project.title}
		featureBullets={project.featureBullets}
		photoUrl={project.photosCollection.items[0].url}
		height={project.photosCollection.items[0].height}
		width={project.photosCollection.items[0].width}
	/>
{/each}
