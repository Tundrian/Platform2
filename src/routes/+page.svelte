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
					brief: string
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
					brief: "Look up commonly used terms"
				},
				{
					name: "Courses",
					brief: "Take a guided course on a topic"
				},
				{
					name: "Unions",
					brief: "Learn all about unions and how they help society"
				},
				{
					name: "Co-operatives",
					brief: "Discovery a workplace beyond dictatorship of the boss"
				},
				{
					name: "Myth busting",
					brief: "With so much false information around, learn what the truths are"
				},
				{
					name: "Answering Questions",
					brief: "Look up common questions or submit a new one to add to the roster"
				},
				{
					name: "Reading Lists",
					brief: "There's always too much to read, but we can help guide your learning path"
				},
				{
					name: "Socials",
					brief: "Stay in the loop with news, feeds, and more"
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
					brief: "Help start or support your workplace union"
				},
				{
					name: "Campaigning",
					brief: "Get help with running for public office"
				},
				{
					name: "Co-operatives",
					brief: "Learn about starting or making change towards co-operatives"
				},
				{
					name: "Financing",
					brief: "Get help with personal or professional financing"
				},
				{
					name: "Recruiting",
					brief: "Find tools to help find people to join your organization or compaign"
				},
				{
					name: "Community Organizing",
					brief: "Find or start a community organization"
				},
				{
					name: "Legal Assistance",
					brief: "Learn about your rights and options as a citizen"
				},
				{
					name: "Mental Assistance",
					brief: "Find resources to give your mind some assistance"
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
					brief: ""
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
					brief: ""
				},
				{
					name: "Audiobooks",
					brief: ""
				},
				{
					name: "News sites",
					brief: ""
				},
				{
					name: "Magazines",
					brief: ""
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
					brief: ""
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
					brief: ""
				},
			]
		},
	]
	
</script>

<!-- Hero Section -->
<Hero />


<!-- Browse Categories -->
<Categories categories={categories}/>

