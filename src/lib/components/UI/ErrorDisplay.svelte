<script lang="ts">
	export let errorMessage: string | null;
</script>

<div class="error-message">{errorMessage}</div>

<style>
	.error-message {
		background-color: #ffdddd;
		border: 1px solid red;
		padding: 10px;
		color: black;
		font-weight: bold;
	}
</style>
