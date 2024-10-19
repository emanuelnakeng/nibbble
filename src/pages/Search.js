import NavigationBar from '../components/header/NavigationBar';
import ScreenContainer from '../components/header/UI/ScreenContainer';
import SearchBar from '../components/header/UI/SearchBar';
import SingleRecipe from '../components/header/UI/SingleRecipe';

function Search() {
	const data = [
		{
			name: 'Goat cheese, lentil & beetroot salad',
			id: 1,
			image: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
			category: 'Alcoholic',
		},
		{
			name: 'Curry udon noodle soup',
			id: 2,
			image: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
			category: 'Alcoholic',
		},
		{
			name: 'Creamy chickpea curry',
			id: 3,
			image: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
			category: 'Vegetarian',
		},
		{
			name: 'Creamy chickpea curry',
			id: 4,
			image: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
			category: 'Vegetarian',
		},
		{
			name: 'Creamy chickpea curry',
			id: 5,
			image: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
			category: 'Vegetarian',
		},
		{
			name: 'Creamy chickpea curry',
			id: 6,
			image: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
			category: 'Vegetarian',
		},
		{
			name: 'Creamy chickpea curry',
			id: 7,
			image: 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg',
			category: 'Vegetarian',
		},
	];
	return (
		<ScreenContainer>
			<NavigationBar />
			<SearchBar
				heading='Search recipes'
				subHeading='Discover endless recipes that bring flavor to your table and joy
				to your kitchen.'
			/>
			<div className='flex justify-center sm:w-11/12 md:w-8/12 '>
				<div className='flex flex-row flex-wrap gap-10'>
					{data.map(recipe => {
						return (
							<SingleRecipe
								key={recipe.id}
								image={recipe.image}
								recipeName={recipe.name}
								category={recipe.category}
							/>
						);
					})}
				</div>
			</div>
		</ScreenContainer>
	);
}
export default Search;
