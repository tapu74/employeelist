<script lang="ts">
	import { onDestroy } from 'svelte';
	import { postEmployeeBulk } from '$lib/API/Api';
	import type { ImportEmployeesBulkResponse } from '$lib/Types/Employee';
	import { bulkData } from '$lib/Store/employee-store';
	import { generateFakeData } from '$lib/Util/fake-data';
	import BulkStatus from './BulkStatus.svelte';
	import Button from './UI/Button.svelte';
	import InputField from './UI/InputField.svelte';
	import ErrorDisplay from './UI/ErrorDisplay.svelte';

	let bulkId: string | null;
	let numberOfEmployee: number;
	let errorMessage: null | string = null;
	let disabled = false;

	const handleInput = (event: CustomEvent) => {
		numberOfEmployee = event.detail;
	};

	const handleEmployeeCreation = async () => {
		if (numberOfEmployee < 350 || !numberOfEmployee) {
			errorMessage = 'Please input at least 350';
		} else {
			errorMessage=null;
			bulkId = null;
			disabled = true;
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
				errorMessage = e.message;
			}
		}
	};

	const unsubscribe = bulkData.subscribe((data) => {
		 if (data?.bulkOperationState === 'Finished') {
			disabled = false;
		}
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="employee-info">
	<p>Anzahl der Mitarbeiter, die angelegt werden</p>
	<div class="input-group">
		<InputField placeholder="e.g. 350" on:input={handleInput} />
		<Button onClick={handleEmployeeCreation} color="primary" size="lg" {disabled}
			>Mitarbeiter anlegen</Button
		>
	</div>
</div>
{#if errorMessage}<ErrorDisplay {errorMessage} />{/if}

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
