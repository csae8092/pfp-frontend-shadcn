<script>
	// @ts-nocheck

	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import EntityTypeIcon from '$lib/components/entity-type-icon.svelte';
	import { getFirstSubdomain } from '$lib/myutils';
	import { cidoc_mapping } from '$lib/constants.js';
	import { isLabeledStatement } from 'typescript';
	let { data, params } = $props();

	let entity_label = $derived(data.entityPayload.sources[0].label);
</script>

<svelte:head>
	<title>{entity_label}</title>
</svelte:head>

<div class="flex justify-start">
	<Breadcrumb.Root>
		<Breadcrumb.List>
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Link href={`/${params.entities}`}
					>{params.entities.charAt(0).toUpperCase() + params.entities.slice(1)}</Breadcrumb.Link
				>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Page>{entity_label}</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>
</div>

<div class="p-3 xl:mx-20 2xl:mx-80">
	<h1 class="p-3 text-center text-5xl font-bold">
		<div class="flex items-center justify-center">
			<div class="hidden md:block">
				<EntityTypeIcon type={params.entities} class="h-15 w-15 pe-2" />
			</div>
			<div>{entity_label}</div>
		</div>
	</h1>
	<h2 class="p-2 text-center text-muted-foreground">{data.entityPayload.uuid.split('/').at(-1)}</h2>
	
	<h3 class="ps-2 text-2xl font-bold">Labels</h3>
	<div class="ps-2">{[...data.labels].sort().join('; ')}</div>

	{#if data.events && Object.keys(data.events).length > 0}
		<h3 class="ps-2 text-2xl font-bold">Events</h3>
		{#each Object.entries(data.events) as [eventType, eventItems]}
			<h4 class="font-bold ps-2">{cidoc_mapping[eventType] ?? eventType}</h4>
			<ul class="ps-2">
				{#each eventItems as x}
					<li class="ms-1"><a href="{x.uuid}">{x.label}</a>, {x.date} ({x.source})</li>
				{/each}
			</ul>
		{/each}
	{/if}
	<h3 class="ps-2 text-2xl font-bold">URIs</h3>
	<div class="ps-2">
		{data.uris.join("; ")}
	</div>
	

</div>
