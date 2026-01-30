<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	let { bcLabel } = $props();
</script>

<div class="flex justify-start">
	<Breadcrumb.Root>
		<Breadcrumb.List>
            {#if bcLabel}
			<Breadcrumb.Item>
				<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
			</Breadcrumb.Item>
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				<Breadcrumb.Page>
					{bcLabel}
				</Breadcrumb.Page>
			</Breadcrumb.Item>
            {:else}
            <Breadcrumb.Item>
				<Breadcrumb.Page>
					Home
				</Breadcrumb.Page>
			</Breadcrumb.Item>
            {/if}
		</Breadcrumb.List>
	</Breadcrumb.Root>
</div>
