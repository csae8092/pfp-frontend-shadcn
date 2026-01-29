<script>
	import * as Card from '$lib/components/ui/card/index.js';
    import Button from '$lib/components/ui/button/button.svelte';
	let { data } = $props();
    import EntityTypeIcon from '$lib/components/entity-type-icon.svelte';

    let entity_links = [
        {
            icon: "user",
            link: "person",
        },
        {
            icon: "users",
            link: "groups"
        },
        {
            icon: "map",
            link: "places"
        },
        {
            icon: "book",
            link: "works"
        },
    ]

</script>

<svelte:head>
	<title>Datasets</title>
</svelte:head>
<div class="p-3 text-center xl:mx-20 2xl:mx-80">
	<h1 class="p-3 text-5xl font-bold">Datasets</h1>
	<h2 class="p-2 text-2xl font-medium md:text-3xl">Explore data from {data.count} Datasets</h2>
</div>

<div class="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] justify-items-center gap-8">
	{#each data.datasets as x, i}
		<Card.Root class="-my-4 w-full max-w-sm">
			<Card.Header>
				<Card.Title class="text-center text-2xl">
					<h3 id={`card-title-${i}`}>{x.label}</h3>
				</Card.Title>
			</Card.Header>
			<Card.Content>
				<div class="flex justify-center items-center gap-x-1">
                    {#each entity_links as y }
                        <div>
                        <Button href={`/${y.link}?datasets=${x.uri}`}><EntityTypeIcon type={y.icon} /></Button>
                    </div>
                    {/each}
				</div>
			</Card.Content>
		</Card.Root>
	{/each}
</div>
