<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>Datasets</title>
</svelte:head>
<div class="p-3 text-center xl:mx-20 2xl:mx-80">
	<h1 class="p-3 text-5xl font-bold">Datasets</h1>
	<h2 class="p-2 text-2xl font-medium md:text-3xl">Explore data from { data.count }</h2>
	<p class="p-1 md:text-xl">
		The PFP – Prosopographical Research Platform Austria serves as an umbrella project for
		person-based research at the Austrian Academy of Sciences (OeAW) using methods of Digital
		Humanities. In this platform, data from prosopographical projects, digital editions and the
		Austrian Biographical Dictionary are integrated.
	</p>
</div>
