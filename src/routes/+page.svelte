<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Categories from '$lib/components/Categories.svelte';

	interface Categories
		{
			category: string,
			brief: string,
			imageURL: string,
			subcategory: 
				{
					name: string,
					brief: string,
					image: string
				}[]
			
		}
	
		const categories: Categories[] = [
		{
			category: "Education",
			brief: "Learn about the world the right way",
			imageURL: "education.svg",
			subcategory: [
				{
					name: "Terms",
					brief: "Look up commonly used terms",
					image: 'categories/terms.svg'
				},
				{
					name: "Courses",
					brief: "Take a guided course on a topic",
					image: 'categories/courses.svg'
				},
				{
					name: "Unions",
					brief: "Learn all about unions and how they help society",
					image: 'categories/unions.svg'
				},
				{
					name: "Co-operatives",
					brief: "Discovery a workplace beyond dictatorship of the boss",
					image: 'categories/cooperatives.svg'
				},
				{
					name: "Myth busting",
					brief: "With so much false information around, learn what the truths are",
					image: 'categories/myths.svg'
				},
				{
					name: "Answering Questions",
					brief: "Look up common questions or submit a new one to add to the roster",
					image: 'categories/answers.svg'
				},
				{
					name: "Reading Lists",
					brief: "There's always too much to read, but we can help guide your learning path",
					image: 'categories/readinglist.svg'
				},
				{
					name: "Socials",
					brief: "Stay in the loop with news, feeds, and more",
					image: 'categories/socials.svg'
				}
			]
		},
		{
			category: "Tools",
			brief: "Discovery tools to help learn or create change",
			imageURL: "education.svg",
			subcategory: [
				{
					name: "Unionizing",
					brief: "Help start or support your workplace union",
					image: 'categories/unionizing.svg'
				},
				{
					name: "Campaigning",
					brief: "Get help with running for public office",
					image: 'categories/campaigning.svg'
				},
				{
					name: "Co-operatives",
					brief: "Learn about starting or making change towards co-operatives",
					image: 'categories/cooperatives.svg'
				},
				{
					name: "Financing",
					brief: "Get help with personal or professional financing",
					image: 'categories/finances.svg'
				},
				{
					name: "Recruiting",
					brief: "Find tools to help find people to join your organization or compaign",
					image: 'categories/recruiting.svg'
				},
				{
					name: "Community Organizing",
					brief: "Find or start a community organization",
					image: 'categories/community.svg'
				},
				{
					name: "Legal Assistance",
					brief: "Learn about your rights and options as a citizen",
					image: 'categories/legal.svg'
				},
				{
					name: "Mental Assistance",
					brief: "Find resources to give your mind some assistance",
					image: 'categories/mental.svg'
				}
			]
		},
		{
			category: "Policies",
			brief: "Learn about policy positions and how we can implement them",
			imageURL: "education.svg",
			subcategory: [
				{
					name: "",
					brief: "",
					image: 'categories/terms.svg'
				},
			]
		},
		{
			category: "Resources",
			brief: "",
			imageURL: "education.svg",
			subcategory: [
				{
					name: "eBooks",
					brief: "",
					image: 'categories/ebook.svg'
				},
				{
					name: "Audiobooks",
					brief: "",
					image: 'categories/audiobook.svg'
				},
				{
					name: "News sites",
					brief: "",
					image: 'categories/news.svg'
				},
				{
					name: "Magazines",
					brief: "",
					image: 'categories/magazine.svg'
				},
			]
		},
		{
			category: "Entertainment",
			brief: "",
			imageURL: "education.svg",
			subcategory: [
				{
					name: "",
					brief: "",
					image: 'categories/terms.svg'
				},
			]
		},
		{
			category: "Life Skills",
			brief: "",
			imageURL: "education.svg",
			subcategory: [
				{
					name: "",
					brief: "",
					image: 'categories/terms.svg'
				},
			]
		},
	]
	
</script>
<div class="bg-white">
<!-- Hero Section -->
<Hero />

<!-- Browse Categories -->
<Categories categories={categories}/>

</div>

