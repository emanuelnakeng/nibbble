import { useEffect, useState } from 'react';
import ScreenContainer from '../components/header/UI/ScreenContainer';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import Recipe from '../components/header/UI/Recipe';

function Home() {
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

	const [index, setIndex] = useState(0);

	const checkRandomNumber = number => {
		if (number > heroImages.length - 1) {
			return 0;
		}
		if (number < 0) {
			return heroImages.length - 1;
		}
		return number;
	};

	useEffect(() => {
		const timerInterval = setInterval(() => {
			let randomNum = Math.floor(Math.random() * heroImages.length);
			if (randomNum === index) {
				randomNum = index + 1;
			}
			setIndex(checkRandomNumber(randomNum));
		}, 5000);
		return () => clearInterval(timerInterval);
	});

	useEffect(() => {});
	return (
		<ScreenContainer>
			<section
				className={`w-full h-[28rem] container mx-auto rounded-3xl bg-cover bg-center bg-no-repeat mb-15`}
				style={{ backgroundImage: `url(${heroImages[index].image})` }}
			>
				<div className='w-full h-full bg-dark-clr/50 rounded-3xl flex flex-col justify-end'>
					<div className='pl-5 md:px-20 mb-20 break-all'>
						<h1 className='text-5xl text-white font-bold leading-normal md:leading-relaxed'>
							Find delicious recipes for you
						</h1>
						<div className='inline-flex items-center z-10 gap-2'>
							<HiOutlineArrowTrendingUp
								size={20}
								color='#ff642f'
							/>
							<h2 className='text-lg text-white'>
								Discover, Cook and Enjoy: Curated recipes
							</h2>
						</div>
					</div>
				</div>
			</section>
			<section className='container mx-auto pt-10 w-full'>
				<h2 className='font-bold text-2xl md:tex-3xl text-dark-clr'>
					Trending Categories
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
			<section className='container mx-auto py-10 w-full'>
				<h2 className='font-bold text-2xl md:tex-3xl text-dark-clr'>
					Recently viewed
				</h2>
				<div className='grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-10 py-10 '>
					<Recipe />
					<Recipe />
					<Recipe />
					<Recipe />
				</div>
			</section>
			<section className='bg-accent-clr-light container mx-auto rounded-3xl flex flex-col h-[28rem] items-center justify-center gap-5'>
				<h2 className='text-4xl font-bold text-dark-clr text-center'>
					Unlock a world of deliciousness
				</h2>
				<p className='text-sm font-medium text-dark-clr/90 text-center'>
					Discover great recipes and start creating mouthwatering
					meals today
				</p>
				<Link
					to='/search'
					className={`bg-white py-3 px-6 rounded-full text-dark-clr font-semibold text-sm`}
				>
					Discover
				</Link>
			</section>
		</ScreenContainer>
	);
}
export default Home;
