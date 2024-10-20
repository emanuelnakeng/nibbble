import Recipe from '../components/ui/Recipe';

function CategoryResults({ isSearching, results, currentCat }) {
	if (!results) {
		return (
			<section className='container mx-auto pt-12 w-full'>
				<h2 className='font-bold text-2xl md:tex-3xl text-dark-clr text-center'>
					Loading...
				</h2>
			</section>
		);
	}

	return (
		<section className='container mx-auto pt-12 w-full'>
			<h2 className='font-bold text-2xl md:tex-3xl text-dark-clr'>
				Search results
			</h2>
			<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 md:gap-10 py-10 '>
				{results.map(item => {
					return (
						<Recipe
							id={item.idMeal}
							mealName={item.strMeal}
							category={currentCat}
							cuisine={item.strArea}
							image={item.strMealThumb}
						/>
					);
				})}
			</div>
		</section>
	);
}
export default CategoryResults;
