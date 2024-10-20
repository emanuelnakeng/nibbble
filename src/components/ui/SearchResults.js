import Recipe from './Recipe';

function SearchResults({ isError, isSearching, results }) {
	if (results === null) {
		return (
			<section className='container mx-auto pt-12 w-full sm:h-[20vh]'>
				<h2 className='font-bold text-2xl md:tex-3xl text-dark-clr text-center'>
					No recipe found
				</h2>
			</section>
		);
	}

	if (isSearching) {
		return (
			<section className='container mx-auto pt-12 w-full flex flex-col items-center sm:h-[20vh]'>
				<h2 className='font-bold text-2xl md:tex-3xl text-dark-clr text-center'>
					Loading...
				</h2>
			</section>
		);
	}

	if (results.length === 0) {
		return (
			<section className='container mx-auto pt-12 w-full sm:h-[20vh]'></section>
		);
	}

	if (isError) {
		return (
			<section className='container mx-auto pt-12 w-full'>
				<h2 className='font-bold text-2xl md:tex-3xl text-dark-clr text-center'>
					Something went wrong
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
							category={item.strCategory}
							cuisine={item.strArea}
							image={item.strMealThumb}
						/>
					);
				})}
			</div>
		</section>
	);
}
export default SearchResults;
