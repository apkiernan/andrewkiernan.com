<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="flex">
	<div class="titleContainer">
		<h1 class="h1">Hi, I'm Andrew</h1>
		<div class="arrow">&rarr;</div>
	</div>
	<div class="headshotWrapper">
		<img alt="headshot" class="headshot" src={data.headshot.url} />
	</div>
</div>
<div class="flex reverse">
	<p>JavaScript ninja, CSS wizard, HTML rockstar. Master of hyperbole.</p>
</div>

<style>
	@keyframes arrow {
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
		animation: 1s arrow infinite;
		padding: 0 1rem;
		font-size: 3rem;
	}

	.h1 {
		margin: 0;
		font-size: 2rem;
	}

	.flex {
		align-items: center;
		display: flex;
		flex-direction: row;
	}

	.reverse {
		flex-direction: row-reverse;
	}

	.titleContainer {
		display: flex;
		align-items: container;
		margin-right: 2rem;
	}

	.headshotWrapper {
		display: flex;
		height: 5rem;
		width: 7rem;
	}

	.headshot {
		border-radius: 5rem;
		max-height: 100%;
		max-width: 100%;
	}

	@media screen and (min-width: 500px) {
		.h1 {
			font-size: 3rem;
		}

		.titleContainer {
			margin-right: 4rem;
		}

		.headshotWrapper {
			height: 15rem;
			width: 15rem;
		}

		.headshot {
			border-radius: 15rem;
		}
	}
</style>
