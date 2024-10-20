import ScreenContainer from '../components/common/ScreenContainer';
import background from '../assets/background.png';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryResults from './CategoryResults';

function SearchByCategory() {
	const [results, setResults] = useState(false);
	const { categoryId } = useParams();

	useEffect(() => {
		const onSearchHandler = async () => {
			const resp = await fetch(
				`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`
			);
			const recipes = await resp.json();
			setResults(recipes.meals);
		};

		onSearchHandler();
	});

	return (
		<ScreenContainer>
			<section
				className={`h-[40vh] w-full container mx-auto rounded-3xl bg-[#FF9A78] bg-center bg-contain md:h-[40vh] bg-no-repeat mb-15`}
				style={{
					backgroundImage: `url(${background})`,
				}}
			>
				<div className='w-full h-full rounded-3xl flex flex-col justify-center duration-300 ease-in-out gap-5'>
					<div className='text-center'>
						<h1 className='text-3xl md:text-6xl text-white font-bold leading-normal md:leading-relaxed capitalize'>
							{categoryId}
						</h1>
						<p className='text-base text-white'>
							2,000 000+ recipes from around the world
						</p>
					</div>
				</div>
			</section>
			<CategoryResults results={results} currentCat={categoryId} />
		</ScreenContainer>
	);
}
export default SearchByCategory;
