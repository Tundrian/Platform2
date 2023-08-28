<script lang="ts">
	interface Categories {
		category: string;
		brief: string;
		imageURL: string;
		url: string,
		subcategory: {
			name: string;
			brief: string;
			image: string;
			url: string;
		}[];
	}

	// import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	export let categories: Categories[];
</script>

<!-- Updated categories -->
<div class="p-5 pb-24">
	{#each categories as category}
		<a href={category.url} ><h2 class="text-2xl text-gray-700 dark:text-white font-bold mb-5 mt-10 ">{category.category}</h2></a>
		<div class="lg:grid lg:grid-cols-2 lg:gap-x-5">
			{#each category.subcategory as subcategory}
			<a href="{subcategory.url}">
			<div class="card rounded-2xl border-2 my-3 bg-white dark:bg-sky-950 border-gray-500 shadow-md hover:cursor-pointer max-w-4xl mx-auto bg-contain bg-no-repeat bg-right lg:w-full " style="background-image: url('{subcategory.image}'); background-origin: content-box, padding-box;">
				<header class="card-header dark:text-white font-semibold text-gray-700 text-xl">{subcategory.name}</header>
				<section  class="p-4 text-gray-500">
					<p class="w-3/4 dark:text-gray-300">{subcategory.brief}</p>
					<!-- <img src="categories/terms.svg" alt="" class> -->
				</section>
				<!-- <footer class="card-footer">(footer)</footer> -->
			</div>
		</a>
			{/each}
		</div>
		
	{/each}
</div>