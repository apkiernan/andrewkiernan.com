<script>
	import { blur } from 'svelte/transition';
</script>

<svelte:head>
	<title>Andrew Kiernan's Resume</title>
</svelte:head>
<div in:blur={{ delay: 250 }}>
	<section class="job-block">
		<div class="job-header">
			<a class="company-name" href="https://connectrn.com">ConnectRN</a>
			<span>January 2022 - present</span>
		</div>
		<div>
			<em>Tech Lead - Senior Frontend Engineer</em>
		</div>
		<section>
			<ul class="bullet-list">
				<li>
					Implemented system to coordinate tech debt and codebase improvements in web portals.
				</li>
				<li>
					Build out and expand infrastructure to improve unit and integration testing of new and
					legacy code.
				</li>
			</ul>
		</section>
	</section>
	<section class="job-block">
		<div class="job-header">
			<a class="company-name" href="https://swell.is">Swell</a>
			<span>April 2021 - December 2021</span>
		</div>
		<div>
			<em>Full Stack Software Engineer</em>
		</div>
		<section>
			<ul class="bullet-list">
				<li>
					Built ability to pause and restart user subscriptions for e-commerce merchant stores
				</li>
				<li>Added enhanced notification email support for various subscription events</li>
				<li>
					Expanded reporting dashboard with subscription based metrics using MongoDb aggregation
					pipeline
				</li>
				<li>Led triage of platform error reports via Sentry and wrote up issues for development</li>
			</ul>
		</section>
	</section>
	<section class="job-block">
		<div class="job-header">
			<a class="company-name" href="https://salsify.com">Salsify</a>
			<span>October 2020 - April 2021</span>
		</div>
		<div>
			<em>Software Engineer 2</em>
		</div>
		<section>
			<ul class="bullet-list">
				<li>
					Led project to build dashboard where customers can view their usage and various
					entitlements in the platform, coordinating with Design and Product Management
				</li>
			</ul>
		</section>
		<div class="job-header">
			<em>Software Engineer</em>
			<span>December 2019 - October 2020</span>
		</div>
		<section>
			<ul class="bullet-list">
				<li>Rearchitected validation of property values in the new product edit experience</li>
				<li>
					Added tree-browser style sidebar to product index page to help users navigate their
					product categories
				</li>
			</ul>
		</section>
	</section>
	<section class="job-block">
		<div class="job-header">
			<a class="company-name" href="https://bondlink.com">BondLink</a>
			<span>January 2019 - December 2019</span>
		</div>
		<div>
			<em>Front End Software Engineer</em>
		</div>
		<section>
			<ul class="bullet-list">
				<li>
					Launched investor portal for users utilizing React, Typescript and functional programming
					with fp-ts/io-ts/fp-ts-routing
				</li>
				<li>Added and changed Scala API functionality to support new investor portal</li>
				<li>
					Led research process into front-end framework technologies and laid foundational work for
					new investor portal
				</li>
				<li>
					Built out components for style guide and use in static issuer site redesign in TypeScript
					and SCSS
				</li>
				<li>Implemented API methods to render newly redesigned static sites in Scala</li>
			</ul>
		</section>
	</section>
	<section class="job-block">
		<div class="job-header">
			<a class="company-name" href="https://carbonite.com">Carbonite</a>
			<span>September 2016 - January 2019</span>
		</div>
		<div>
			<em>Software Engineer</em>
		</div>
		<section>
			<ul class="bullet-list">
				<li>
					Member of group tasked with researching technology and JavaScript framework choices for
					new Carbonite Data Protection Console (CDPC)
				</li>
				<li>Built new CDPC in React, Redux, TypeScript, RxJS</li>
				<li>Set up webpack build system with code-splitting for CDPC</li>
				<li>
					Built proof-of-concept feature flags dashboard and GraphQL server for CI/CD pipeline,
					using React, TypeScript, Apollo-GraphQL, NodeJS
				</li>
			</ul>
		</section>
	</section>
</div>

<style lang="scss">
	.job-block {
		margin-bottom: 2rem;
	}

	.job-header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}

	.bullet-list {
		padding-left: 1rem;
		display: grid;
		grid-row-gap: 0.5rem;
	}

	.company-name {
		text-decoration: none;
		cursor: pointer;
		font-size: 1.25rem;
	}
</style>
