<script lang="ts">
	import * as Alert from '$lib/components/ui/alert/index.js';
	import AlertCircleIcon from '@lucide/svelte/icons/alert-circle';

	const errors: string[] = $props<string[]>();
</script>

<Alert.Root variant="destructive">
	<AlertCircleIcon />
	<Alert.Title>Sorry, something went wrong :(</Alert.Title>
	<Alert.Description>
		<ul class="list-inside list-disc text-sm">
			{#each errors as error, i}
				<li id={`error-${i}`}>{error}</li>
			{/each}
		</ul>
	</Alert.Description>
</Alert.Root>
