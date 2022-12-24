<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer>
	<span>&copy; Andrew Kiernan {year}</span>
</footer>

<style lang="scss">
	footer {
		align-items: center;
		border-top: 1px solid #ccc;
		display: flex;
		justify-content: center;
		height: 3rem;

		@media screen and (min-width: 500px) {
			height: 5rem;
		}
	}
</style>
