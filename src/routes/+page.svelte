<script lang="ts">
	import type { PageData } from './$types';
	import { blur, fly } from 'svelte/transition';

	export let data: PageData;
</script>

<div in:blur>
	<div class="container">
		<div class="title-container">
			<h1>Hi, I&apos;m Andrew</h1>
			<div class="arrow">&rarr;</div>
		</div>
		<div class="headshot-wrapper">
			<img alt="headshot" class="headshot" src={data.headshot.url} />
		</div>
	</div>
	<div>
		<p>JavaScript ninja, CSS wizard, HTML rockstar. Master of hyperbole.</p>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
	}

	@keyframes bounce {
		12.5% {
			transform: translateX(2.5%);
		}
		25% {
			transform: translateX(5%);
		}
		37.5% {
			transform: translateX(7.5%);
		}
		50% {
			transform: translateX(10%);
		}
		62.5% {
			transform: translateX(7.5%);
		}
		75% {
			transform: translateX(5%);
		}
		87.5% {
			transform: translateX(2.5%);
		}
		100% {
			transform: translateX(0);
		}
	}

	.arrow {
		animation: 1s bounce infinite;
		padding: 0 1rem;
		font-size: 3rem;
	}

	.title-container {
		display: flex;
		align-items: center;
		margin-right: 2rem;

		@media screen and (min-width: 500px) {
			margin-right: 4rem;
		}
	}

	.headshot-wrapper {
		display: flex;
		height: 5rem;
		width: 7rem;
		border-radius: 5rem;

		@media screen and (min-width: 500px) {
			height: 15rem;
			width: 15rem;
			border-radius: 15rem;
		}
	}

	.headshot {
		border-radius: 15rem;
	}

	h1 {
		margin: 0;
		font-size: 2rem;

		@media screen and (min-width: 500px) {
			font-size: 3rem;
		}
	}
</style>
