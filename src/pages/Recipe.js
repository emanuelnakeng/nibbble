import { useEffect, useState } from 'react';
import ScreenContainer from '../components/common/ScreenContainer';
import { useParams } from 'react-router-dom';
import { MdShare } from 'react-icons/md';

function Recipe() {
	const { id } = useParams();
	const [recipe, setRecipe] = useState({});
	const [isLoading, setIsloading] = useState(true);

	useEffect(() => {
		const fetchRecipe = async () => {
			const response = await fetch(
				`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
			);
			const recipeDetails = await response.json();
			console.log(recipeDetails.meals[0]);
			setRecipe(recipeDetails.meals[0]);
			setIsloading(false);
		};
		fetchRecipe();
	}, [id]);

	if (isLoading) {
		return (
			<ScreenContainer>
				<section className='container mx-auto pt-12 w-full h-[60vh] flex flex-col items-center justify-center'>
					<h2 className='font-bold text-2xl md:tex-3xl text-dark-clr text-center'>
						Loading...
					</h2>
				</section>
			</ScreenContainer>
		);
	}

	return (
		<ScreenContainer>
			<section className={`container mx-auto`}>
				<div className='flex items-center justify-between w-full border-b border-border-clr'>
					<h1 className='text-3xl md:text-5xl text-dark-clr font-bold leading-normal md:leading-relaxed'>
						{recipe.strMeal}
					</h1>
					<MdShare size={22} color={'#180b06'} />
				</div>
				<div className='flex flex-col md:flex-row gap-10 py-10'>
					<img
						src={recipe.strMealThumb}
						alt=''
						className='rounded-3xl md:w-2/5 h-auto'
					/>
					<div>
						<h2 className='font-bold text-2xl md:tex-3xl text-dark-clr'>
							Ingredients
						</h2>
						<ul>
							<li>
								{recipe.strMeasure1 +
									' ' +
									recipe.strIngredient1}
							</li>
							<li>
								{recipe.strMeasure2 +
									' ' +
									recipe.strIngredient2}
							</li>
							<li>
								{recipe.strMeasure3 +
									' ' +
									recipe.strIngredient3}
							</li>
							<li>
								{recipe.strMeasure4 +
									' ' +
									recipe.strIngredient4}
							</li>
							<li>
								{recipe.strMeasure5 +
									' ' +
									recipe.strIngredient5}
							</li>

							<li>
								{recipe.strMeasure6 +
									' ' +
									recipe.strIngredient6}
							</li>
							<li>
								{recipe.strMeasure7 +
									' ' +
									recipe.strIngredient7}
							</li>

							<li>
								{recipe.strMeasure8 +
									' ' +
									recipe.strIngredient8}
							</li>
							<li>
								{recipe.strMeasure9 +
									' ' +
									recipe.strIngredient9}
							</li>
							<li>
								{recipe.strMeasure10 +
									' ' +
									recipe.strIngredient10}
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section className={`container mx-auto`}>
				<h2 className='font-bold text-2xl md:tex-3xl text-dark-clr'>
					Instructions
				</h2>
				<p className='text-base text-dark-clr leading-8'>
					{recipe.strInstructions}
				</p>
			</section>
		</ScreenContainer>
	);
}
export default Recipe;
