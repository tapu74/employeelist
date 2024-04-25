<script lang="ts">
	import { get } from '$lib/API/Api';
	import type { BulkResponse } from '$lib/Models/Employee';
	import { bulkData } from '$lib/Store/employee-store';
	import { onDestroy, onMount } from 'svelte';
	export let bulkId: string;
	let bulkResponse: BulkResponse | null = null;
	let intervalId: number | undefined;

	const fetchData = async () => {
		try {
			const response = await get<BulkResponse>(`employees/bulk/${bulkId}`);
			bulkResponse = response;
			cleanTheInterval(bulkResponse);
		} catch (error) {
			console.error('Error fetching job status:', error);
		}
	};

	const cleanTheInterval = (bulk: BulkResponse) => {
		if (bulk.failed + bulk.succeeded === bulk.total) {
			bulkData.set({
				id: bulk.id,
				failed: bulk.failed,
				succeeded: bulk.succeeded,
				total: bulk.total,
				status: bulk.status,
				bulkOperationState: 'Finished'
			});
			clearInterval(intervalId);
		} else {
			bulkData.set({
				id: bulk.id,
				failed: bulk.failed,
				succeeded: bulk.succeeded,
				total: bulk.total,
				status: bulk.status,
				bulkOperationState: 'inProgress'
			});
		}
	};

	onMount(() => {
		fetchData();
		intervalId = setInterval(fetchData, 3000);
	});

	onDestroy(() => clearInterval(intervalId));
</script>
