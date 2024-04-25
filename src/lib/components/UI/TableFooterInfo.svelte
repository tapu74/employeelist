<script lang="ts">
	import { employeeStore } from '$lib/Store/employee-store';
    export let  count:number;
</script>

<div class="table-info">
	<span id="numRows">{$employeeStore.length} geladen von {count} Ergebnissen</span>
</div>

<style>
	.table-info {
		padding: 10px 20px;
		text-align: left;
		color: #6b716a;
		line-height: 14px;
		font-weight: 600;
		font-size: 10px;
	}
</style>
