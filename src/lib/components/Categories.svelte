<script lang="ts">
	interface Categories {
		category: string;
		brief: string;
		imageURL: string;
		subcategory: {
			name: string;
			brief: string;
			image: string;
		}[];
	}

	// import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	export let categories: Categories[];
</script>

<!-- Updated categories -->
<div class="mx-5">
	{#each categories as category}
		<h2 class="text-2xl text-gray-700 font-bold mb-5 mt-10 ">{category.category}</h2>
		<div class=" lg:grid lg:grid-cols-2 lg:gap-x-5">
			{#each category.subcategory as subcategory}
		
			<div class="card rounded-2xl border-2 my-3 bg-white shadow-md hover:cursor-pointer max-w-4xl mx-auto bg-contain bg-no-repeat bg-right lg:w-full " style="background-image: url('{subcategory.image}')">
				<header class="card-header font-semibold text-gray-700 text-xl">{subcategory.name}</header>
				<section  class="p-4 text-gray-500">
					<p class="w-3/4">{subcategory.brief}</p>
					<!-- <img src="categories/terms.svg" alt="" class> -->
				</section>
				<!-- <footer class="card-footer">(footer)</footer> -->
			</div>
					
			{/each}
		</div>
		
	{/each}
</div>

<!-- Browse Categories -->
<!-- <Accordion class="mb-20">
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
</Accordion> -->
