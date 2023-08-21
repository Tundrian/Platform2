<script lang='ts'>
	// // The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// // If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	// import '@skeletonlabs/skeleton/styles/skeleton.css';
	// // Most of your app wide CSS should be put in this file
	// import '../app.postcss';

	// Your custom Skeleton theme:
import '../theme.postcss';

// This contains the bulk of Skeletons required styles:
import '@skeletonlabs/skeleton/styles/skeleton.css';

// Finally, your application's global stylesheet (sometimes labeled 'app.css')
import '../app.postcss';


	import { AppBar } from '@skeletonlabs/skeleton';
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';

	import FaHamburger from 'svelte-icons/fa/FaHamburger.svelte'
	import FaRegListAlt from 'svelte-icons/fa/FaRegListAlt.svelte'
</script>

<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end" class="fixed top-0 left-0 right-0">
	<svelte:fragment slot="lead">
		<div class="w-[2rem]">
			<FaRegListAlt/>
		</div>
	</svelte:fragment>
	Name of Site
	<svelte:fragment slot="trail">
		<div class="w-[2rem]">
			<FaHamburger/>
		</div>
		
</svelte:fragment>
</AppBar>

<slot />

<TabGroup 
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded=""
	border=""
	class="bg-surface-100-800-token w-full fixed bottom-0 left-0 right-0"
>
	<TabAnchor href="/" selected={$page.url.pathname === '/'} class="w-1/3">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label)</span>
	</TabAnchor>
	<TabAnchor href="/" selected={$page.url.pathname === '/'} class="w-1/3" >
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label)</span>
	</TabAnchor>
	<TabAnchor href="/" selected={$page.url.pathname === '/'} class="w-1/3">
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<span>(label)</span>
	</TabAnchor>
	<!-- ... -->
</TabGroup>