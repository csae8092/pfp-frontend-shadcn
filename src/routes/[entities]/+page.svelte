<script>
	let { data, params } = $props();
	import MyBreadcrumb from '$lib/components/my-breadcrumb.svelte';	
</script>

<svelte:head>
	<title>{data.label}</title>
</svelte:head>
<MyBreadcrumb bcLabel={ data.label }></MyBreadcrumb>
<div class="p-3 text-center xl:mx-20 2xl:mx-80">
	<h1 class="p-3 text-5xl font-bold">{data.label}</h1>
</div>
