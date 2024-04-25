<script lang="ts">
	import TableFooterInfo from './UI/TableFooterInfo.svelte';
	import ErrorDisplay from './UI/ErrorDisplay.svelte';
	import EmployeeList from './UI/EmployeeList.svelte';
	import Button from '../components/UI/Button.svelte';
	import { onMount, onDestroy } from 'svelte';
	import type { EmployeesResponse } from '../Models/Employee';
	import { employeeStore } from '$lib/Store/employee-store';
	import { get } from '$lib/API/Api';

	let isLoading = false;
	const limit = 50;
	let offset = 0;
	let count: number;
	let hasMoreData = true;
	let errorMessage: null | string = null;
	let showHasLoadMoreButton = true;
	let tableBottomElement: HTMLElement | null = null;
	let observer: IntersectionObserver | null;

	const fetchEmployees = async () => {
		isLoading = true;

		try {
			const response = await get<EmployeesResponse>(`employees?limit=${limit}&offset=${offset}`);
			isLoading = false;
			employeeStore.addEmployees(response.rows);
			offset = offset + limit;
			count = response.total;
			hasMoreData = response.total > $employeeStore.length;
		} catch (e) {
			errorMessage = e.message;
		}
	};

	const handleLoadMore = async () => {
		await fetchEmployees();
	};

	onMount(() => {
		tableBottomElement = document.querySelector('#table-bottom');

		const handleIntersect: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !isLoading && hasMoreData) {
					fetchEmployees();
				}

				if (!entry.isIntersecting && hasMoreData) {
					showHasLoadMoreButton = false;
				}
			});
		};

		observer = new IntersectionObserver(handleIntersect, {
			threshold: 0.2,
			root: null,
			rootMargin: '0px'
		});

		if (observer && tableBottomElement) {
			observer.observe(tableBottomElement);
		}
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<div class="data-table">
	{#if errorMessage}<ErrorDisplay {errorMessage} />
	{:else}
		{#if $employeeStore.length !== 0}
			<EmployeeList />
		{/if}

		{#if isLoading}
			<p>Loading...</p>
		{/if}

		{#if hasMoreData && showHasLoadMoreButton}
			<Button onClick={handleLoadMore} color="secondary">Load More</Button>
		{/if}
	{/if}

	<div id="table-bottom"></div>
</div>

{#if !errorMessage}
	<TableFooterInfo {count} />
{/if}

<style>
	.data-table {
		height: calc(100vh - 200px);
		overflow-y: auto;
	}
	#table-bottom {
		position: inherit;
		padding-top: 20px;
	}
</style>
