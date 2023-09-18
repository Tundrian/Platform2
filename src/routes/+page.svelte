<script lang="">
	import Hero from '$lib/components/Hero.svelte';
	import Categories from '$lib/components/Categories.svelte';
	import { allCategories } from '$lib/data/categoryLists';

</script>

<div class="bg-white dark:bg-slate-800">
	<Hero />

	<div id="categories-anchor" />
	<!-- Browse Categories -->
	<Categories categories={allCategories} />
</div>

<!-- <footer>
	<h4>Image Attributions</h4>
	<ul>
		<li>Vectors and icons by <a href="https://soco-st.com/?ref=svgrepo.com" target="_blank">Soco St</a> in CC Attribution License via <a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a></li>
	</ul>
</footer> -->
