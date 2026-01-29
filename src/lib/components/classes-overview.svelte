<script>
    import * as Card from '$lib/components/ui/card/index.js';
	import { UserIcon, UsersIcon, MapIcon, BookOpenIcon } from 'lucide-svelte';
	import EntityTypeIcon from './entity-type-icon.svelte';

	let { stats } = $props()

</script>


<div class="grid grid-cols-[repeat(auto-fit,minmax(380px,1fr))] justify-items-center gap-15 py-7">
	{#each stats as x, i}
		<a href={x.link} aria-labelledby={`card-title-${i}`}>
			<Card.Root class="-my-4 w-full max-w-sm">
				<Card.Header>
					<Card.Title class="text-center text-2xl">
                        <h3 id={`card-title-${i}`}>{x.amount} {x.label}</h3>
                    </Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="flex items-center gap-x-3">
						<div>
                            <EntityTypeIcon type={x.icon} class="h-25 w-25 pe-2" />
						</div>
						<div>{x.description}</div>
					</div>
				</Card.Content>
			</Card.Root>
		</a>
	{/each}
</div>