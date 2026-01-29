<script>
    let { data, params } = $props();
</script>
<svelte:head>
	<title>{ data.label }</title>
</svelte:head>

<div class="p-3 text-center xl:mx-20 2xl:mx-80">
	<h1 class="p-3 text-5xl font-bold">{ data.label }</h1>
</div>
