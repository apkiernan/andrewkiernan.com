<script lang="ts">
	import type { PageData } from './$types';
	import Image from '$lib/components/Image/Image.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Blog | Andrew Kiernan</title>
</svelte:head>

{#each data.posts as post}
	<div class="grid">
		<Image
			alt="blog-post-header"
			class="img"
			src={post.cover_photo.url}
			placeholder={post.cover_photo.blur}
		/>
		<div>
			<a href={`/blog/${post.slug}`}>
				<p>{post.title}</p>
			</a>
		</div>
	</div>
{/each}

<style>
	@media screen and (min-width: 700px) {
		.grid {
			display: grid;
			grid-template-columns: 35% 65%;
			grid-gap: 2rem;
		}

		.grid :global(.img) {
			max-height: unset;
		}
	}

	.grid :global(.img) {
		height: auto;
		max-height: 25vh;
		width: 100%;
	}
</style>
