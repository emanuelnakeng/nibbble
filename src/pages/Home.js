import { useEffect, useState } from 'react';
import ScreenContainer from '../components/common/ScreenContainer';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';
import { categories, heroImages } from '../utils/data';
import Category from '../components/ui/Category';
import Button from '../components/common/Button';
import { getRandomArrayItems } from '../utils/helpers';

function Home() {
	const [index, setIndex] = useState(0);
	const shuffledCategories = getRandomArrayItems(categories, 6);

	useEffect(() => {
		let randomNum = Math.floor(Math.random() * heroImages.length);
		setIndex(randomNum);
	}, []);

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
				<div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6 py-10'>
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
			{/* <RecentlyViewed /> */}
			<section className='bg-accent-clr-light container mx-auto rounded-3xl flex flex-col h-[28rem] items-center justify-center gap-5 px-3 mt-12 '>
				<h2 className='text-3xl md:text-4xl font-bold text-dark-clr text-center'>
					Unlock a world of deliciousness
				</h2>
				<p className='text-sm font-medium text-dark-clr/90 text-center leading-5'>
					Find great recipes and start creating mouthwatering meals
					today
				</p>
				<Button
					styles='bg-white text-dark-clr hover:bg-accent-clr hover:text-white'
					to='/search'
				>
					Discover
				</Button>
			</section>
		</ScreenContainer>
	);
}
export default Home;
