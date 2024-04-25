<script lang="ts">
	import { postEmployeeBulk } from '$lib/API/Api';
	import type { ImportEmployeesBulkResponse } from '$lib/Types/Employee';
	import { bulkData } from '$lib/Store/employee-store';
	import { generateFakeData } from '$lib/Util/fake-data';
	import BulkStatus from './BulkStatus.svelte';
	import Button from './UI/Button.svelte';
	import InputField from './UI/InputField.svelte';

	let bulkId: string|null;
	let numberOfEmployee: number;

	const handleInput = (event: CustomEvent) => {
		numberOfEmployee = event.detail;
	};
	

	const handleEmployeeCreation = async () => {
		if (numberOfEmployee < 1 || !numberOfEmployee) {
			//TODO: validation check
			return;
		}
		bulkId=null;
		const fakeData = generateFakeData(numberOfEmployee);

		try {
			const response = await postEmployeeBulk<ImportEmployeesBulkResponse>(
				'employees/bulk/import',
				{ rows: fakeData }
			);
			if (response.id) {
				bulkId = response.id;
				bulkData.set(null);
			}
		} catch (e) {
			console.error(e);
		}
	};
</script>

<div class="employee-info">
	<p>Anzahl der Mitarbeiter, die angelegt werden</p>
	<div class="input-group">
		<InputField placeholder="e.g. 350" on:input={handleInput} />
		<Button onClick={handleEmployeeCreation} color="primary" size="lg">Mitarbeiter anlegen</Button>
	</div>
</div>

{#if bulkId}
	<BulkStatus {bulkId} />
{/if}

<style>
	.employee-info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 100%;
		padding: 5px;
	}

	.employee-info p {
		margin-bottom: 10px;
	}

	.input-group {
		display: flex;
		align-items: center;
	}
</style>
