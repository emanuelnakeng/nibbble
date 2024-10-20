import ScreenContainer from '../components/common/ScreenContainer';
import background from '../assets/background.png';
import SearchResults from '../components/ui/SearchResults';
import { useState } from 'react';

function Search() {
	const [isSearching, setIsSearching] = useState(false);
	const [isError, setIsError] = useState(false);
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);

	const onSearchHandler = async e => {
		e.preventDefault();
		const enteredQuery = query.trim();
		if (enteredQuery.length > 1) {
			try {
				setIsSearching(true);
				const response = await fetch(
					`https://www.themealdb.com/api/json/v1/1/search.php?s=${enteredQuery}`
				);
				const results = await response.json();
				setResults(results.meals);
				setIsSearching(false);
				setIsError(false);
			} catch (error) {
				setIsError(true);
			}
		}
		return;
	};

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
						<h1 className='text-3xl md:text-6xl text-white font-bold leading-normal md:leading-relaxed'>
							Search
						</h1>
						<p className='text-base text-white'>
							2,000 000+ recipes from around the world
						</p>
					</div>
					<div className='flex flex-col items-center'>
						<form className='w-full md:w-2/4 px-2 md:px-0'>
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
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
										/>
									</svg>
								</div>
								<input
									type='search'
									id='default-search'
									className={`block w-full p-4 ps-10 text-sm text-dark-clr border border-border-clr rounded-3xl bg-white focus:outline-0`}
									placeholder='Find recipes, cocktails and more...'
									required
									onChange={e => {
										setQuery(e.target.value);
									}}
									value={query}
								/>
								<button
									type='submit'
									className={`text-white absolute end-2.5 bottom-2.5 bg-accent-clr-light ${
										query.length > 1
											? 'hover:bg-accent-clr'
											: ''
									}  ${
										query.length > 1 ? 'focus:ring-2' : ''
									}  ${
										query.length > 1
											? 'focus:ring-accent-clr'
											: ''
									} focus:outline-none  font-medium rounded-3xl text-sm px-4 py-2`}
									onClick={onSearchHandler}
								>
									Search
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
			<SearchResults
				isError={isError}
				isSearching={isSearching}
				results={results}
			/>
			{/* <RecentlyViewed /> */}
		</ScreenContainer>
	);
}
export default Search;
