<script lang="ts">
	interface Categories
		{
			category: string,
			brief: string,
			imageURL: string,
			subcategory:
				{
					name: string,
					brief: string
				}[]
		}
	
        import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
    export let categories: Categories[];
</script>

<!-- Browse Categories -->
<Accordion class="mb-20">
	{#each categories as category}
	<AccordionItem class="variant-filled-secondary mt-1">
		<svelte:fragment slot="lead">
			<img src="education.svg" alt="" class="h-16" />
		</svelte:fragment>
		<svelte:fragment slot="summary">
			<section>
				<h3 class="text-xl pb-2">{category.category}</h3>
				<p class="text-sm pl-4">
					{category.brief}
				</p>
			</section>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<div class="logo-cloud grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-0.5">
				{#each category.subcategory as subcategory}
				<a href="/elements/logo-clouds" class="logo-item variant-filled-surface">
					<section>
						<h3 class="text-2xl pb-2 text-primary-500">{subcategory.name}</h3>
						<p class="pl-4 font-light">
							{subcategory.brief}
						</p>
					</section>
				</a>
				{/each}
			</div>
		</svelte:fragment>
	</AccordionItem>
	{/each}
</Accordion>
