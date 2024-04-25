<script>

	import { bulkData } from "$lib/Store/employee-store";

</script>
<div class="spinner-container">
	<div class="spinner"></div>
    <span>
        {#if $bulkData}
		<p>Status: {$bulkData.status}</p>
		<p>Total: {$bulkData.total}</p>
		<p>succeeded: {$bulkData.succeeded}</p>
		<p>failed: {$bulkData.failed}</p>
	{/if}
    
    </span>
</div>

<style>
	.spinner-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 500px;
	}

	.spinner {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 4px solid rgba(0, 0, 0, 0.1);
		border-top-color: #3498db;
		animation: spin 1s linear infinite;
	}

	/* Keyframes for the spin animation */
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
