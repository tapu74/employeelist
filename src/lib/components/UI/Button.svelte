<script lang="ts">
	export let onClick: () => void;
	export let size: 'md' | 'lg' | 'sm' = 'md';
	export let color: 'primary' | 'secondary' = 'primary';
	export let disabled = false;

	const classes = () => {
		return `btn btn-${color} btn-${size} ${disabled ? 'disabled' : ''}`;
	};
</script>

<button type="button" class={classes()} on:click={onClick} {disabled}><slot /></button>

<style>
	/* button {
		padding: 0px 24px;
		border: 1px solid transparent;
		font-size: 14px;
		font-weight: 400;
		font-family: inherit;
		color: #fbfefc;
		background-color: #30a46c;
		cursor: pointer;
		border-radius: 24px;
		width: 177px;
		height: 40px;
	} */

	.btn {
		padding: 0px 24px;
		border: 1px solid transparent;
		font-weight: 400;
		font-family: inherit;
		cursor: pointer;
		border-radius: 24px;
		margin: 10px;
	}

	.btn-sm {
		font-size: 10px;
	}

	.btn-md {
		font-size: 12px;
	}

	.btn-lg {
		font-size: 14px;
		height: 40px;
	}

	.btn-primary {
		background-color: #30a46c;
		color: #fbfefc;
	}

	.btn-secondary {
		background-color: #89aa95;
		color: #fff;
	}

	button:hover {
		border-color: white;
	}
	button:focus,
	button:focus-visible {
		outline: 4px auto #21724b;
	}

	.disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
