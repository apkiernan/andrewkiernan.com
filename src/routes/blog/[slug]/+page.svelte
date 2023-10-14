<script lang="ts">
	import Image from '$lib/components/Image/Image.svelte';
	import type { PageData } from './$types';
	import './atom.css';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>

<h1>{data.post.title}</h1>
<div class="cover-photo-wrapper">
	<Image
		src={data.post.coverPhoto.url}
		class="cover-photo"
		placeholder={data.post.coverPhoto.blur}
		alt={`Photo for ${data.post.title}`}
	/>
</div>

{@html data.post.content}

<style>
	.cover-photo-wrapper {
		margin-bottom: 2rem;
		position: relative;
		width: 100%;
		height: 200px;
	}

	@media screen and (min-width: 500px) {
		.cover-photo-wrapper {
			height: 300px;
		}
	}

	.cover-photo-wrapper :global(.cover-photo) {
		width: 100%;
		height: 100%;
	}
</style>
