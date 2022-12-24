<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

{#each data.posts as post}
	<div class="grid" in:fade>
		<img
			alt="blog-post"
			src={post.coverPhoto.url}
			height={post.coverPhoto.height}
			width={post.coverPhoto.width}
		/>
		<div>
			<a href={`/${post.slug}`}>
				<p>{post.title}</p>
			</a>
		</div>
	</div>
{/each}

<style lang="scss">
	@media screen and (min-width: 700px) {
		.grid {
			display: grid;
			grid-template-columns: 35% 65%;
			grid-gap: 2rem;
		}

		img {
			height: auto;
			max-height: 25vh;
			width: 100%;

			@media screen and (min-width: 700px) {
				max-height: unset;
			}
		}
	}
</style>
