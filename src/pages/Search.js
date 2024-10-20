import Recipe from '../components/ui/Recipe';
import ScreenContainer from '../components/common/ScreenContainer';
import background from '../assets/background.png';
function Search() {
	return (
		<ScreenContainer>
			<section
				className={`h-[30vh] w-full container mx-auto rounded-3xl bg-[#FF9A78] bg-bottom bg-contain md:bg-cover md:h-[40vh] bg-no-repeat mb-15`}
				style={{
					backgroundImage: `url(${background})`,
				}}
			>
				<div className='w-full h-full rounded-3xl flex flex-col justify-center duration-300 ease-in-out gap-5'>
					<div className='text-center'>
						<h1 className='text-3xl md:text-6xl text-white font-bold leading-normal md:leading-relaxed'>
							Search
						</h1>
						<p className='text-base text-white'>
							2,000 000+ recipes from around the world
						</p>
					</div>
					<div className='flex flex-col items-center'>
						<form className='w-full md:w-2/4 px-5 md:px-0'>
							<div className='relative'>
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
									id='default-search'
									className='block w-full p-4 ps-10 text-sm text-dark-clr border border-border-clr rounded-3xl bg-white focus:outline-0'
									placeholder='Find recipes, cocktails and more...'
									required
								/>
								<button
									type='submit'
									className='text-white absolute end-2.5 bottom-2.5 bg-accent-clr-light hover:bg-accent-clr focus:ring-4 focus:outline-none focus:ring-accent-clr font-medium rounded-3xl text-sm px-4 py-2'
								>
									Search
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
			<section className='container mx-auto pt-10 px-5'>
				<h2 className='text-xl text-dark-clr font-bold leading-normal'>
					Search results
				</h2>
				<div className='grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-10 py-10 '>
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
