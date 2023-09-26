<script lang="ts">
	const date = new Date().getFullYear();
</script>

<footer>
	<span>&copy; Andrew Kiernan {date}</span>
</footer>

<style>
	footer {
		align-items: center;
		border-top: 1px solid #ccc;
		display: flex;
		justify-content: center;
		height: 3rem;
	}

	@media screen and (min-width: 500px) {
		footer {
			height: 5rem;
		}
	}
</style>
