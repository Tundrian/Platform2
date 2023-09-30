<script lang="ts">
	import Categories from '$lib/components/Categories.svelte';
	import { educationCategories } from '$lib/data/categoryLists';

</script>

<section class="bg-white dark:bg-slate-800 ">
	<div class="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:h-screen lg:items-center">
		<div class="mx-auto max-w-xl text-center">
			<h1 class="text-3xl font-extrabold sm:text-5xl text-slate-700 dark:text-slate-200">
				{educationCategories[0].category}
			</h1>
			<p class="mt-4 sm:text-xl/relaxed text-slate-700 dark:text-slate-300">{educationCategories[0].brief}</p>
		</div>
	</div>
</section>


<Categories categories={educationCategories} /> 
