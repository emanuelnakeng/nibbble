import ScreenContainer from '../components/header/UI/ScreenContainer';

function Categories() {
	const categories = [
		{
			name: 'Breakfast',
			imageURI:
				'https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Smoothies',
			imageURI:
				'https://images.unsplash.com/photo-1505576540771-be91e4753e0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Desserts',
			imageURI:
				'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Burgers',
			imageURI:
				'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Pizza',
			imageURI:
				'https://images.unsplash.com/photo-1627207644206-a2040d60ecad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			name: 'Soups',
			imageURI:
				'https://images.unsplash.com/photo-1530734575165-ce39d996fbaa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
	];
	return (
		<ScreenContainer>
			<section className='container mx-auto pt-5 w-full px-5'>
				<h2 className='font-bold text-3xl md:tex-3xl text-dark-clr'>
					Categories
				</h2>
				<div className='flex flex-row flex-wrap w-full justify-center pt-10'>
					{categories.map(cat => {
						return (
							<article className='basis-1/2 md:basis-1/6 flex flex-col items-center py-5 gap-5'>
								<img
									src={cat.imageURI}
									alt={cat.name}
									className='w-48 h-48 rounded-full object-cover object-center'
								/>
								<h3 className='text-sm font-semibold text-dark-clr'>
									{cat.name}
								</h3>
							</article>
						);
					})}
				</div>
			</section>
		</ScreenContainer>
	);
}
export default Categories;
