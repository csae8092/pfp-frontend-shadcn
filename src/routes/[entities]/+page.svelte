<script>
	// @ts-nocheck
	let { data, params } = $props();
	import { goto } from '$app/navigation';
	import MyBreadcrumb from '$lib/components/my-breadcrumb.svelte';
	import EntityTypeIcon from '$lib/components/entity-type-icon.svelte';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import { page as pageStore } from '$app/state';

	let url = $derived(pageStore.url);
</script>

<svelte:head>
	<title>{data.label}</title>
</svelte:head>
<MyBreadcrumb bcLabel={data.label}></MyBreadcrumb>
<div class="p-3 text-center xl:mx-20 2xl:mx-80">
	<h1 class="p-3 text-5xl font-bold">
		<div class="flex items-center justify-center">
			<div>
				<EntityTypeIcon type={params.entities} class="h-15 w-15 pe-2" />
			</div>
			<div>{data.label}</div>
		</div>
	</h1>
</div>
<div class="pb-5">
	<Pagination.Root perPage={data.payload.size} count={data.payload.total} page={data.payload.page}>
		{#snippet children({ pages, currentPage })}
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.Previous
						onclick={() => {
							const params = new URLSearchParams(url.searchParams);
							params.set('page', String(currentPage - 1));
							goto(`${url.pathname}?${params}`);
						}}
					></Pagination.Previous>
				</Pagination.Item>
				{#each pages as page (page.key)}
					{#if page.type === 'ellipsis'}
						<Pagination.Item>
							<Pagination.Ellipsis />
						</Pagination.Item>
					{:else}
						<Pagination.Item>
							<a
								href={`${url.pathname}?${new URLSearchParams({
									...Object.fromEntries(url.searchParams),
									page: page.value
								})}`}
							>
								<Pagination.Link {page} isActive={currentPage === page.value}>
									{page.value}
								</Pagination.Link>
							</a>
						</Pagination.Item>
					{/if}
				{/each}
				<Pagination.Item>
					<Pagination.Next
						onclick={() => {
							const params = new URLSearchParams(url.searchParams);
							params.set('page', String(currentPage + 1));
							goto(`${url.pathname}?${params}`);
						}}
					></Pagination.Next>
				</Pagination.Item>
			</Pagination.Content>
		{/snippet}
	</Pagination.Root>
</div>
<div
	class="grid min-w-full grid-cols-[repeat(auto-fit,minmax(380px,1fr))] justify-items-center gap-8"
>
	{#each data.payload.items as x, i}
		<Card.Root class="w-full max-w-sm">
			<Card.Header>
				<Card.Title class="text-center text-2xl">
					<a href={`/${params.entities}/${x.uuid.split('/').at(-1)}`} class="hover:text-primary">
						<h2 id={`card-title-${i}`}>{x.sources[0].label}</h2>
					</a>
				</Card.Title>
			</Card.Header>
			<Card.Content class="text-center">
				<dl>
					<dt>{x.sources.length} {x.sources.length === 1 ? 'Source' : 'Sources'}</dt>
					{#each x.sources as y}
						<dd>
							<Tooltip.Provider>
								<Tooltip.Root>
									<Tooltip.Trigger class="hover:text-primary">{y.source}</Tooltip.Trigger>
									<Tooltip.Content>
										<p>{y.label}</p>
									</Tooltip.Content>
								</Tooltip.Root>
							</Tooltip.Provider>
						</dd>
					{/each}
				</dl>
			</Card.Content>
			<Card.Footer>
				<div class="text-center text-muted-foreground">ID: {x.uuid.split('/').at(-1)}</div>
			</Card.Footer>
		</Card.Root>
	{/each}
</div>
