<script lang="ts">
	// Your custom Skeleton theme:
	import '../theme.postcss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';

	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import FaHamburger from 'svelte-icons/fa/FaHamburger.svelte';
	import FaRegListAlt from 'svelte-icons/fa/FaRegListAlt.svelte';
	import { fade, fly } from 'svelte/transition';

	export let data;
	let drawer = false;
	// Open the drawer:
	function drawerOpen(): void {
		drawer ? drawerStore.close() : drawerStore.open();
		drawer = !drawer;
	}
</script>

<Drawer bgDrawer="bg-white dark:bg-slate-800">
	<h2 class="p-5 text-3xl"><a href="/">Navigation</a></h2>
	<TreeView class="indent-6">
		<TreeViewItem>
			<a href="/startHere" on:click={drawerOpen}>Start Here</a>
		</TreeViewItem>
		<TreeViewItem>
			Education
			<svelte:fragment slot="children">
				<TreeViewItem>
					<a href="/education/terms" on:click={drawerOpen}>Terms</a>
				</TreeViewItem>
			</svelte:fragment>
		</TreeViewItem>
	</TreeView>
</Drawer>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<AppBar
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	class="fixed top-0 left-0 right-0 h-16 py-2"
	background="variant-filled-primary"
>
	<svelte:fragment slot="lead">
		<div class="w-[2rem] hover:cursor-pointer" on:click={drawerOpen}>
			<FaRegListAlt />
		</div>
	</svelte:fragment>
	<a href="/">Name of Site</a>
	<svelte:fragment slot="trail">
		<div class="w-[5rem] flex justify-between">
			<LightSwitch />
			<FaHamburger />
		</div>
	</svelte:fragment>
</AppBar>

<main>
	{#key data.url}
		<!-- <div in:fly={{x: -200, duration: 100, delay: 100}}
		out:fly={{x: 200, duration: 100}}> -->
		<div in:fade={{delay: 300, duration: 300}} out:fade={{duration: 300}}>
			<slot />
		</div>
	{/key}
</main>


<TabGroup
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-surface-100-800-token w-full fixed bottom-0 left-0 right-0 h-16"
>
	<TabAnchor href="/" selected={$page.url.pathname === '/'} class="w-1/3">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label)</span>
	</TabAnchor>
	<TabAnchor href="/" selected={$page.url.pathname === '/'} class="w-1/3">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label)</span>
	</TabAnchor>
	<TabAnchor href="/" selected={$page.url.pathname === '/'} class="w-1/3">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label)</span>
	</TabAnchor>
	<!-- ... -->
</TabGroup>