<script>
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
    import EntityTypeIcon from '$lib/components/entity-type-icon.svelte';
	let { data, params } = $props();

	let entity_label = $derived(data.payload.sources[0].label);
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
				<Breadcrumb.Link href={`/${params.entities}`}>{params.entities.charAt(0).toUpperCase() + params.entities.slice(1)}</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Page>{entity_label}</Breadcrumb.Page>
			</Breadcrumb.Item>
		</Breadcrumb.List>
	</Breadcrumb.Root>
</div>

<div class="p-3 text-center xl:mx-20 2xl:mx-80">
	<h1 class="p-3 text-5xl font-bold">
		<div class="flex items-center justify-center">
			<div>
				<EntityTypeIcon type={params.entities} class="h-15 w-15 pe-2" />
			</div>
			<div>{entity_label}</div>
		</div>
	</h1>
</div>
