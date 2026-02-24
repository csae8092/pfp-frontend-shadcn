<script>
	// @ts-nocheck

	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import EntityTypeIcon from '$lib/components/entity-type-icon.svelte';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import { getFirstSubdomain } from '$lib/myutils';
	import { cidoc_mapping } from '$lib/constants';
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
	<h3 class="p-2 text-center text-2xl font-bold">Instances new</h3>

	{#each Object.entries(data.events).filter(([eventType]) => eventType in cidoc_mapping) as [eventType, eventItems]}
		<h4>{cidoc_mapping[eventType]}</h4>
		<ul>
			{#each eventItems as x}
			<li><a href="{x.uuid}">{x.label}</a>, {x.date} ({x.source})</li>
			{/each}
		</ul>

	{/each}

	


	
	<h3 class="p-2 text-center text-2xl font-bold">Instances old</h3>
	<Accordion.Root type="multiple">
		{#each data.entityPayload.sources as source, i}
			<Accordion.Item value={`item-${i}`}>
				<Accordion.Trigger
					>{source.label} <small>{getFirstSubdomain(source.subject)}</small> Events: {source.events
						?.length || 0}</Accordion.Trigger
				>
				<Accordion.Content>
					{#if source.events?.length > 0}
						{#each source.events as event}
							<div>
								{event.type}
								{event.date}
								{#each event.objects as x}
								 {x.label}
								{/each}
								{event.objects[0].label}
								{#each event.relatedEntity as relEnt, i}
									<a href={`/groups/${relEnt.id_proxy}`}>{relEnt.label}</a>
								{/each}
							</div>
						{/each}
					{/if}
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>

	
</div>
