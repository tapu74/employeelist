<script lang="ts">
	import { employeeStore } from '$lib/Store/employee-store';
	import { formatDate } from '$lib/Util/fake-data';
</script>

<table>
	<thead>
		<tr>
			<th>Personalnummer</th>
			<th>Vorname</th>
			<th>Nachname</th>
			<th>Aktiv</th>
			<th>Erstellt</th>
		</tr>
	</thead>
	<tbody>
		{#each $employeeStore as result}
			<tr>
				<td>{result.employeeKey}</td>
				<td>{result.firstName}</td>
				<td>{result.lastName}</td>
				<td>
					{#if result.active}
						<span class="badgeActive">Aktiv</span>
					{:else}
						<span class="badgeInactive">Inaktiv</span>
					{/if}
				</td>
				<td>{result.created ? formatDate(result.created) : ''}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
	}

	thead th {
		text-align: left;
		padding: 12px;
		font-size: 14px;
		color: #141e12;
		font-weight: 400;
		border-top: 1px solid #e0e4e0;
	}

	table td {
		text-align: left;
		padding: 12px;
		font-size: 14px;
		font-weight: 400;
		line-height: 19.6px;
		color: #6b716a;
		border-top: 1px solid #e0e4e0;
		width: calc(100% / 5);
	}

	table tbody tr {
		font-weight: 400;
		font-size: 14px;
		border-bottom: 1px solid #e0e4e0;
		cursor: pointer;
	}

	table tbody tr:nth-child(odd) {
		background-color: #ecefec;
	}

	table tbody tr:nth-child(even) {
		background-color: #ffffff;
	}

	table tbody tr:hover {
		background-color: #ddf3e4;
	}

	.badgeActive {
		background-color: #b4dfc4;
		color: #18794e;
		font-size: 12px;
		font-weight: 600;
		text-align: center;
		line-height: 16.8px;
		border-radius: 5px;
		padding: 0px 8px 0px 8px;
	}

	.badgeInactive {
		background-color: #e6e9e6;
		color: #6b716a;
		font-size: 12px;
		font-weight: 600;
		text-align: center;
		line-height: 16.8px;
		border-radius: 5px;
		padding: 0px 8px 0px 8px;
	}
</style>
