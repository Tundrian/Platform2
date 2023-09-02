<script lang="ts">
	import Categories from "$lib/components/Categories.svelte";
	
	import { allCategories } from "$lib/data/categoryLists";

	// import { Autocomplete } from '@skeletonlabs/skeleton';
	// import type { AutocompleteOption } from '@skeletonlabs/skeleton';
	// import { Table } from '@skeletonlabs/skeleton';
	// import type { TableSource } from '@skeletonlabs/skeleton';
	// import { tableMapperValues } from '@skeletonlabs/skeleton';
	let inputDemo = '';

	// const flavorOptions: AutocompleteOption[] = [
	// 	{ label: 'Vanilla', value: 'vanilla', keywords: 'plain, basic', meta: { healthy: false } },
	// 	{ label: 'Chocolate', value: 'chocolate', keywords: 'dark, white', meta: { healthy: false } },
	// 	{ label: 'Strawberry', value: 'strawberry', keywords: 'fruit', meta: { healthy: true } },
	// 	{
	// 		label: 'Neapolitan',
	// 		value: 'neapolitan',
	// 		keywords: 'mix, strawberry, chocolate, vanilla',
	// 		meta: { healthy: false }
	// 	},
	// 	{ label: 'Pineapple', value: 'pineapple', keywords: 'fruit', meta: { healthy: true } },
	// 	{ label: 'Peach', value: 'peach', keywords: 'fruit', meta: { healthy: true } }
	// ];

	// function onFlavorSelection(event: any): void {
	// 	inputDemo = event.detail.label;
	// }
	// interface Categories {
	// 	category: string;
	// 	brief: string;
	// 	imageURL?: string;
	// 	url: string;
	// 	subcategory: {
	// 		name: string;
	// 		brief: string;
	// 		image?: string;
	// 		url: string;
	// 	}[];
	// }
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
	];

	// console.log(categories);

	// const tableSimple: TableSource = {
	// 	// A list of heading labels.
	// 	head: ['Name', 'SymbDefinitionol'],
	// 	// The data visibly shown in your table body UI.
	// 	body: tableMapperValues(sourceData, ['term', 'briefDefinition']),
	// 	// Optional: The data returned when interactive is enabled and a row is clicked.
	// 	meta: tableMapperValues(sourceData, ['term', 'briefDefinition'])
	// 	// Optional: A list of footer labels.
	// 	// foot: ['Total', '', '<code class="code">5</code>']
	// };

	// const loadTableData = (e: any) =>{
	// 	console.log(e.detail)
	// }
</script>

<input
	class="input mt-20 mx-1"
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

<!-- <Table source={tableSimple} class="p-5 table-interactive table-sort-asc" interactive={true} on:selected={loadTableData}/> -->
<Categories {categories}/>