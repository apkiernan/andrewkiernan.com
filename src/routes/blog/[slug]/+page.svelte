<script lang="ts">
	import { parseMarkdown } from '../../projects/parseMarkdown';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>
<h1>{data.post.title}</h1>
<div class="coverPhotoWrapper">
	<img
		src={data.post.coverPhoto.url}
		height={data.post.coverPhoto.height}
		width={data.post.coverPhoto.width}
		alt=""
	/>
</div>

{@html parseMarkdown(data.post.content)}

<style>
	.coverPhotoWrapper {
		margin-bottom: 2rem;
		position: relative;
		width: 100%;
		height: 200px;
	}

	@media screen and (min-width: 500px) {
		.coverPhotoWrapper {
			height: 300px;
		}
	}
</style>
