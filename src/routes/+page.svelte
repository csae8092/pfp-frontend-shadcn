<script>
// @ts-nocheck

	let { data } = $props();
	import * as Alert from '$lib/components/ui/alert/index.js';
	import AlertCircleIcon from '@lucide/svelte/icons/alert-circle';
	import ClassesOverview from '$lib/components/classes-overview.svelte';
	import MyBreadcrumb from '$lib/components/my-breadcrumb.svelte';
	import MyErrorAlert from '$lib/components/my-error-alert.svelte';
</script>

<svelte:head>
	<title>PFP</title>
</svelte:head>
<MyBreadcrumb bcLabel={false}></MyBreadcrumb>
<div class="p-3 text-center xl:mx-20 2xl:mx-80">
	<h1 class="p-3 text-5xl font-bold">PFP</h1>
	<h2 class="p-2 text-2xl font-medium md:text-3xl">A Prosopographical Research Platform</h2>
	<p class="p-1 md:text-xl">
		The PFP – Prosopographical Research Platform Austria serves as an umbrella project for
		person-based research at the Austrian Academy of Sciences (OeAW) using methods of Digital
		Humanities. In this platform, data from prosopographical projects, digital editions and the
		Austrian Biographical Dictionary are integrated.
	</p>
</div>
{#if data.errors.length > 0}
	<MyErrorAlert errors={data.errors}></MyErrorAlert>
	{:else}
	<ClassesOverview stats={data.stats}></ClassesOverview>
{/if}
