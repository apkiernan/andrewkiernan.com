<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data.post.content);
</script>

<h1>{data.post.title}</h1>
<img
	alt="blog-cover"
	src={data.post.coverPhoto.url}
	height={data.post.coverPhoto.height}
	width={data.post.coverPhoto.width}
/>
{@html data.post.content}
