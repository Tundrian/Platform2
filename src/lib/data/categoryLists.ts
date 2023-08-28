interface Categories {
	category: string;
	brief: string;
	imageURL: string;
	url: string;
	subcategory: {
		name: string;
		brief: string;
		image: string;
		url: string;
	}[];
}

export const educationCategories: Categories[] = [
	{
		category: 'Education',
		brief:
			'Take a course, learn about a term, or find other resources to learn about how the world around you works.',
		imageURL: 'education.svg',
		url: '#',
		subcategory: [
			{
				name: 'Terms',
				brief: 'Look up commonly used terms',
				image: 'categories/terms.svg',
				url: 'education/terms'
			}
		]
	}
];

export const allCategories: Categories[] = [
	{
		category: 'Education',
		brief: 'Learn about the world the right way',
		imageURL: 'education.svg',
		url: 'education',
		subcategory: [
			{
				name: 'Terms',
				brief: 'Look up commonly used terms',
				image: 'categories/terms.svg',
				url: 'education/terms'
			},
			{
				name: 'Courses',
				brief: 'Take a guided course on a topic',
				image: 'categories/courses.svg',
				url: 'courses'
			},
			{
				name: 'Unions',
				brief: 'Learn all about unions and how they help society',
				image: 'categories/unions.svg',
				url: 'unions'
			},
			{
				name: 'Co-operatives',
				brief: 'Discovery a workplace beyond dictatorship of the boss',
				image: 'categories/cooperatives.svg',
				url: 'cooperatives'
			},
			{
				name: 'Myth busting',
				brief: 'With so much false information around, learn what the truths are',
				image: 'categories/myths.svg',
				url: 'mythbusting'
			},
			{
				name: 'Answering Questions',
				brief: 'Look up common questions or submit a new one to add to the roster',
				image: 'categories/answers.svg',
				url: 'answeringquestions'
			},
			{
				name: 'Reading Lists',
				brief: "There's always too much to read, but we can help guide your learning path",
				image: 'categories/readinglist.svg',
				url: 'readinglists'
			},
			{
				name: 'Socials',
				brief: 'Stay in the loop with news, feeds, and more',
				image: 'categories/socials.svg',
				url: 'socials'
			}
		]
	},
	{
		category: 'Tools',
		brief: 'Discovery tools to help learn or create change',
		imageURL: 'education.svg',
		url: '',
		subcategory: [
			{
				name: 'Unionizing',
				brief: 'Help start or support your workplace union',
				image: 'categories/unionizing.svg',
				url: 'unionizing'
			},
			{
				name: 'Campaigning',
				brief: 'Get help with running for public office',
				image: 'categories/campaigning.svg',
				url: 'campaigning'
			},
			{
				name: 'Co-operatives',
				brief: 'Learn about starting or making change towards co-operatives',
				image: 'categories/cooperatives.svg',
				url: 'cooperatives'
			},
			{
				name: 'Financing',
				brief: 'Get help with personal or professional financing',
				image: 'categories/finances.svg',
				url: 'financing'
			},
			{
				name: 'Recruiting',
				brief: 'Find tools to help find people to join your organization or compaign',
				image: 'categories/recruiting.svg',
				url: 'recruiting'
			},
			{
				name: 'Community Organizing',
				brief: 'Find or start a community organization',
				image: 'categories/community.svg',
				url: 'communityorganizing'
			},
			{
				name: 'Legal Assistance',
				brief: 'Learn about your rights and options as a citizen',
				image: 'categories/legal.svg',
				url: 'legaladvice'
			},
			{
				name: 'Mental Assistance',
				brief: 'Find resources to give your mind some assistance',
				image: 'categories/mental.svg',
				url: 'mentalassistance'
			}
		]
	},
	{
		category: 'Policies',
		brief: 'Learn about policy positions and how we can implement them',
		imageURL: 'education.svg',
		url: '',
		subcategory: [
			{
				name: '',
				brief: '',
				image: 'categories/terms.svg',
				url: ''
			}
		]
	},
	{
		category: 'Resources',
		brief: '',
		imageURL: 'education.svg',
		url: '',
		subcategory: [
			{
				name: 'eBooks',
				brief: '',
				image: 'categories/ebook.svg',
				url: ''
			},
			{
				name: 'Audiobooks',
				brief: '',
				image: 'categories/audiobook.svg',
				url: ''
			},
			{
				name: 'News sites',
				brief: '',
				image: 'categories/news.svg',
				url: ''
			},
			{
				name: 'Magazines',
				brief: '',
				image: 'categories/magazine.svg',
				url: ''
			}
		]
	},
	{
		category: 'Entertainment',
		brief: '',
		imageURL: 'education.svg',
		url: '',
		subcategory: [
			{
				name: '',
				brief: '',
				image: 'categories/terms.svg',
				url: ''
			}
		]
	},
	{
		category: 'Life Skills',
		brief: '',
		imageURL: 'education.svg',
		url: '',
		subcategory: [
			{
				name: '',
				brief: '',
				image: 'categories/terms.svg',
				url: ''
			}
		]
	}
];
