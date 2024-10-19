import Recipe from '../components/header/UI/Recipe';
import ScreenContainer from '../components/header/UI/ScreenContainer';

function Search() {
	return (
		<ScreenContainer>
			<section className='container mx-auto pt-5 w-full px-5'>
				<h2 className='font-bold text-3xl md:tex-3xl text-dark-clr'>
					Search results
				</h2>
				<form className='w-full py-5 px-2'>
					<div className='relative '>
						<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
							<svg
								className='w-4 h-4 text-gray-500 '
								aria-hidden='true'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 20 20'
							>
								<path
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
								/>
							</svg>
						</div>
						<input
							type='search'
							id='search'
							className='block w-full p-4 ps-10 text-sm text-text-light bg-bg-clr focus:outline-none focus:border-b-accent-clr border-b border-b-border-clr'
							placeholder='Find recipes...'
							required
						/>
						<button
							type='submit'
							className='text-dark-clr absolute end-2.5 bottom-2.5 font-medium hover:text-accent-clr text-sm px-4 py-2   focus:ring-blue-300'
						>
							Search
						</button>
					</div>
				</form>
			</section>
			<section className='container mx-auto pt-5 px-5'>
				<div className='grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-10 py-10 '>
					<Recipe />
					<Recipe />
					<Recipe />
					<Recipe />
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
		</ScreenContainer>
	);
}
export default Search;
