<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let placeholder: string;
	let numberOfEmployee: number;
	const dispatch = createEventDispatcher();

	const handleChange = (event: Event) => {
		numberOfEmployee = Number((event.target as HTMLInputElement).value);
		dispatch('input', numberOfEmployee);
	};
</script>

<input type="number" {placeholder} on:input={handleChange} bind:value={numberOfEmployee} required />

<style>
	input {
		background: #fcfdfc;
		width: 260px;
		height: 40px;
		padding: 0px 12px;
		border-radius: 5px;
		border: 1px solid #c3c8c2;
	}
</style>
