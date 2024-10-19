function SearchBar({ heading, subHeading }) {
	return (
		<section className='mt-150px mb-5 flex flex-col items-center w-full sm:w-11/12 md:w-8/12'>
			<h1 className='text-4xl sm:text-6xl font-bold py-5 '>{heading}</h1>
			<h3 className='text-base '>{subHeading}</h3>
			<form className='w-full px-1 my-50px sm:w-8/12 md:w-6/12'>
				<label
					for='search'
					className='mb-2 text-sm font-medium text-gray-800 sr-only '
				>
					Search
				</label>
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
						className='block w-full p-4 ps-10 text-sm text-gray-900 rounded-xl focus:outline-none'
						placeholder='Find recipes...'
						required
					/>
					<button
						type='submit'
						className='text-white absolute end-2.5 bottom-2.5 font-medium hover:text-bg-clr text-sm px-4 py-2   focus:ring-blue-300'
					>
						Search
					</button>
				</div>
			</form>
		</section>
	);
}
export default SearchBar;

//
