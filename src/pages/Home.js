import { useEffect, useMemo, useState } from 'react';
import ScreenContainer from '../components/common/ScreenContainer';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';
import Recipe from '../components/ui/Recipe';
import { categories, heroImages } from '../utils/data';
import Category from '../components/ui/Category';
import Button from '../components/common/Button';
import { getRandomArrayItems, checkRandomNumber } from '../utils/helpers';

function Home() {
	const [index, setIndex] = useState(0);
	const shuffledCategories = useMemo(
		() => getRandomArrayItems(categories, 6),
		[]
	);

	useEffect(() => {
		const autoplay = setInterval(() => {
			let randomNum = Math.floor(Math.random() * heroImages.length);
			if (randomNum === index) {
				randomNum = index + 1;
			}
			setIndex(checkRandomNumber(heroImages, randomNum));
		}, 5000);
		return () => {
			clearInterval(autoplay);
		};
	}, [index]);

	return (
		<ScreenContainer>
			<section
				className={`w-full h-[60vh] container mx-auto rounded-3xl bg-cover bg-center bg-no-repeat mb-15`}
				style={{ backgroundImage: `url(${heroImages[index].image})` }}
			>
				<div className='w-full h-full bg-dark-clr/50 rounded-3xl flex flex-col justify-end duration-300 ease-in-out'>
					<div className='pl-5 md:px-20 mb-20'>
						<h1 className='text-3xl md:text-5xl text-white font-bold leading-normal md:leading-relaxed'>
							Find delicious recipes for you
						</h1>
						<div className='inline-flex items-center z-10 gap-2'>
							<HiOutlineArrowTrendingUp size={20} color='#fff' />
							<h3 className='text-base text-white'>
								Discover, Cook and Enjoy: Curated cuisines
							</h3>
						</div>
					</div>
				</div>
			</section>
			<section className='container mx-auto pt-12 w-full'>
				<h2 className='font-bold text-2xl md:tex-3xl text-dark-clr'>
					Popular Categories
				</h2>
				<div className='grid grid-cols-2 gap-5 md:grid-cols-6 py-10'>
					{shuffledCategories.map((cat, i) => {
						return (
							<Category
								key={i + '_'}
								catName={cat.name}
								image={cat.imageURI}
							/>
						);
					})}
				</div>
			</section>
			{/* Section must only be visible when exists */}
			<section className='container mx-auto pt-12 w-full'>
				<h2 className='font-bold text-2xl md:tex-3xl text-dark-clr'>
					Recently viewed
				</h2>
				<div className='grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-10 py-10 '>
					<Recipe />
					<Recipe />
					<Recipe />
					<Recipe />
				</div>
			</section>
			<section className='bg-accent-clr-light container mx-auto rounded-3xl flex flex-col h-[28rem] items-center justify-center gap-5 px-3 mt-12 '>
				<h2 className='text-3xl md:text-4xl font-bold text-dark-clr text-center'>
					Unlock a world of deliciousness
				</h2>
				<p className='text-sm font-medium text-dark-clr/90 text-center leading-5'>
					Find great recipes and start creating mouthwatering meals
					today
				</p>
				<Button styles='bg-white text-dark-clr hover:bg-accent-clr hover:text-white'>
					Discover
				</Button>
				{/* <Link
					to='/search'
					className={`bg-white py-3 px-6 rounded-full text-dark-clr font-semibold text-sm`}
				>
					Discover
				</Link> */}
			</section>
		</ScreenContainer>
	);
}
export default Home;
