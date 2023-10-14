<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Blog | Andrew Kiernan</title>
</svelte:head>

{#each data.posts as post}
	<div class="grid">
		<img alt="blog-post-header" class="img" src={post.cover_photo} />
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

		.img {
			max-height: unset;
		}
	}

	.img {
		height: auto;
		max-height: 25vh;
		width: 100%;
	}
</style>
