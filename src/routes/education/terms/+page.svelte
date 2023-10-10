<script lang="ts">
	let inputDemo = '';
	export let data;

	/*import Categories from "$lib/components/Categories.svelte";

		import { allCategories } from "$lib/data/categoryLists";

		import { Autocomplete } from '@skeletonlabs/skeleton';
		import type { AutocompleteOption } from '@skeletonlabs/skeleton';

		const flavorOptions: AutocompleteOption[] = [
			{ label: 'Vanilla', value: 'vanilla', keywords: 'plain, basic', meta: { healthy: false } },
			{ label: 'Chocolate', value: 'chocolate', keywords: 'dark, white', meta: { healthy: false } },
			{ label: 'Strawberry', value: 'strawberry', keywords: 'fruit', meta: { healthy: true } },
			{
				label: 'Neapolitan',
				value: 'neapolitan',
				keywords: 'mix, strawberry, chocolate, vanilla',
				meta: { healthy: false }
			},
			{ label: 'Pineapple', value: 'pineapple', keywords: 'fruit', meta: { healthy: true } },
			{ label: 'Peach', value: 'peach', keywords: 'fruit', meta: { healthy: true } }
		];

		function onFlavorSelection(event: any): void {
			inputDemo = event.detail.label;
		}
		interface Categories {
			category: string;
			brief: string;
			imageURL?: string;
			url: string;
			subcategory: {
				name: string;
				brief: string;
				image?: string;
				url: string;
			}[];
		}
		const categories: Categories = [
			{
				category: '',
				brief: '',
				url: '',
				subcategory: [
					{
						name: 'term 1',
						brief: 'this is a sample of a brief definition of term to be shown on the results table',
						url: `/education/terms/123`
					},
					{
						name: 'term 1',
						brief: 'this is a sample of a brief definition of term to be shown on the results table',
						url: '/'
					},
				]
			}
	];*/
</script>

<a class="p-5 m-10 border border-white inline-block" href="/education/terms/add">Add Term</a>

<input
	class="input  mx-10"
	type="search"
	name="demo"
	bind:value={inputDemo}
	placeholder="Search..."
/>


<!-- {#if inputDemo !== ''}
	<div class="card w-full max-h-48 p-4 overflow-y-auto" tabindex="-1">
		<Autocomplete bind:input={inputDemo} options={flavorOptions} on:selection={onFlavorSelection} />
	</div>
{/if} -->

<!-- <Categories {categories}/> -->



<ul class="border border-green-500 p-10 m-10">
	{#each data.terms as term}
		<li>
			<p>{term.name}</p>
			<p>{term.brief_description}</p>
			{#each term.full_description.split('/n') as description_line}
				<p class="mt-2">{description_line}</p>
			{/each}
		</li>
	{/each}
</ul>
