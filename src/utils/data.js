const categories = [
	{
		name: 'Beef',
		imageURI:
			'https://images.unsplash.com/photo-1676300185579-ed2b14891d82?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Chicken',
		imageURI:
			'https://images.unsplash.com/photo-1679572473418-aacccc69e2d0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Dessert',
		imageURI:
			'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Lamb',
		imageURI:
			'https://images.unsplash.com/photo-1514516345957-556ca7d90a29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Pork',
		imageURI:
			'https://images.unsplash.com/photo-1650206646453-37caf74f2d85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},

	{
		name: 'Starter',
		imageURI:
			'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},

	{
		name: 'Vegan',
		imageURI:
			'https://images.unsplash.com/photo-1519996409144-56c88c9aa612?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Seafood',
		imageURI:
			'https://images.unsplash.com/photo-1682622110397-37f6e928f890?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Side',
		imageURI:
			'https://images.unsplash.com/photo-1662192513841-c890cc6ff3f9?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		name: 'Pasta',
		imageURI:
			'https://images.unsplash.com/photo-1617548059706-d8a95dd91fe7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
];

const heroImages = [
	{
		id: 1,
		image: 'https://images.unsplash.com/photo-1568051243858-533a607809a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
	{
		id: 2,
		image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},

	{
		id: 3,
		image: 'https://images.unsplash.com/photo-1490716961549-5dbd18f53101?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	},
];

const navOptions = [
	{ title: 'Home', to: '/' },
	{ title: 'Search', to: '/search' },
	// { title: 'Favorites', to: '/favorites' },
	{ title: 'Categories', to: '/categories' },
];

export { categories, heroImages, navOptions };
