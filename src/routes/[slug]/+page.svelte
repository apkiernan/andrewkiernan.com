<script lang="ts">
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';
	import Code from './code.svelte';

	export let data: PageData;
</script>

<h1>{data.post.title}</h1>
<div class="img-wrapper">
	<img alt="blog-cover" src={data.post.coverPhoto.url} />
</div>
<SvelteMarkdown
	source={data.post.content}
	renderers={{
		code: Code
	}}
/>

<style lang="scss">
	.img-wrapper {
		max-height: 50vh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 3rem;

		img {
			max-height: 50vh;
			width: auto;
		}
	}
</style>
