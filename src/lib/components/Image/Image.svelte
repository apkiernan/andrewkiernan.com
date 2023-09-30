<script lang="ts">
	import { onMount } from 'svelte';

	export let src: string;
	export let alt: string;
	export let placeholder: string;
	let klass: string;
	export { klass as class };

	$: actualSrc = placeholder;
	let img: HTMLImageElement;

	onMount(() => {
		const fullSize = new Image();

		fullSize.src = src;

		fullSize.onload = () => {
			if (img) {
				actualSrc = src;
			}
		};
	});
</script>

<img
	style:filter={actualSrc === placeholder ? 'blur(20px)' : undefined}
	class={klass}
	src={actualSrc}
	bind:this={img}
	{alt}
/>

<style>
	img {
		transition: filter 0.2s ease-in;
	}
</style>
