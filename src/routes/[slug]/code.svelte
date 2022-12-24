<script lang="ts">
	import Highlight from 'svelte-highlight';
	import typescript from 'svelte-highlight/languages/typescript';
	import javascript from 'svelte-highlight/languages/javascript';
	import bash from 'svelte-highlight/languages/bash';
	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';

	export let text: string;
	export let lang: string;
	export let raw: string | undefined;

	let language: typeof typescript | typeof javascript | typeof bash = typescript;
	$: {
		if (lang === 'typescript') {
			language = typescript;
		} else if (lang === 'javascript') {
			language = javascript;
		} else if (lang === 'bash') {
			language = bash;
		}
	}
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<Highlight {language} code={text} />
