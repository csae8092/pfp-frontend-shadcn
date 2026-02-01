<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { navigating } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import { ModeWatcher } from 'mode-watcher';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { SearchIcon, MenuIcon, Github } from 'lucide-svelte';

	let { children, data } = $props();
	import SunIcon from '@lucide/svelte/icons/sun';
	import MoonIcon from '@lucide/svelte/icons/moon';
	import EntityTypeIcon from '$lib/components/entity-type-icon.svelte';

	import { toggleMode } from 'mode-watcher';
	import { appConfig } from '$lib/constants';
	const isNavigating = $derived(navigating.to !== null);
</script>

<ModeWatcher />

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>PFP</title>
</svelte:head>
{#if isNavigating}
	<div class="progress"></div>
{/if}
<div class="flex min-h-screen flex-col">
	<header class="sticky top-0 z-50 bg-background">
		<div class="max-w-10xl mx-auto flex items-center justify-between gap-8 px-4 py-7 sm:px-6">
			<div
				class="flex flex-1 items-center justify-between gap-8 font-medium text-foreground lg:gap-16"
			>
				<a href="/" class="hover:text-primary"> PFP </a>
			</div>
			<div
				class="flex flex-1 items-center gap-8 font-medium text-muted-foreground max-md:hidden lg:gap-16"
			>
				{#each Object.entries(data.entityConfig) as [key, value] (key)}
					<a href={value.link} class="hover:text-primary">
						<div class="flex gap-1"><EntityTypeIcon type={key}></EntityTypeIcon>{value.label}</div>
					</a>
				{/each}
			</div>

			<div class="flex items-center gap-6">
				<Button variant="ghost" size="icon">
					<SearchIcon />
					<span class="sr-only">Search</span>
				</Button>
				<Button onclick={toggleMode} variant="ghost" size="icon">
					<SunIcon
						class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90"
					/>
					<MoonIcon
						class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>
				<DropdownMenu.Root>
					<DropdownMenu.Trigger class="md:hidden">
						{#snippet child({ props })}
							<Button {...props} variant="outline" size="icon">
								<MenuIcon />
								<span class="sr-only">Menu</span>
							</Button>
						{/snippet}
					</DropdownMenu.Trigger>
					<DropdownMenu.Content>
						{#each Object.entries(data.entityConfig) as [key, value] (key)}
							<DropdownMenu.Item>
								<a href={value.link}>
									<div class="flex gap-1">
										<EntityTypeIcon type={key}></EntityTypeIcon>{value.label}
									</div>
								</a>
							</DropdownMenu.Item>
						{/each}
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>
	</header>
	<main class="flex-1">
		<div class="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40">
			{@render children()}
		</div>
	</main>
	<footer class="mt-8 mb-3 flex justify-center">
		<a href={appConfig.code_repo_url}>
			<Github class="h-10 w-10 text-muted-foreground dark:hover:text-white" />
			<span class="sr-only">Link to code on GitHub</span>
		</a>
	</footer>
</div>

<style>
	.progress {
		position: fixed;
		top: 0;
		left: 0;
		height: 3px;
		width: 100%;
		/* Use CSS variables for color stops to match theme */
		background: linear-gradient(90deg, var(--foreground) 0%, var(--primary) 50%, var(--foreground) 100%);
		background-size: 200% 100%;
		animation: move 1s linear infinite;
		z-index: 1000;
	}

	@keyframes move {
		from {
			background-position: 0% 0;
		}
		to {
			background-position: 200% 0;
		}
	}
</style>
