<script>
	import './app.css';
	import { bulkData } from '$lib/Store/employee-store';
	import { onDestroy } from 'svelte';
	import LoadingSpinner from '$lib/components/UI/LoadingSpinner.svelte';
	import EmployeeTable from '$lib/components/EmployeeTable.svelte';
	import EmployeeInput from '$lib/components/EmployeeInput.svelte';
	let bulkOperationFinish = false;
	let loading = false;

	const unsubscribe = bulkData.subscribe((data) => {
		if (data?.bulkOperationState === 'inProgress') {
			loading = true;
			bulkOperationFinish = false;
		} else if (data?.bulkOperationState === 'Finished') {
			loading = false;
			bulkOperationFinish = true;
		} else {
			// nothing
		}
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<main>
	<div class="container">
		<EmployeeInput />
		{#if loading}
			<LoadingSpinner />
		{/if}
		{#if bulkOperationFinish && !loading}
			<EmployeeTable />
		{/if}
	</div>
</main>

<style>
	.container {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
