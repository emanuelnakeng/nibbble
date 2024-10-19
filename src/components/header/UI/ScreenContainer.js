import { LuInstagram } from 'react-icons/lu';
import { GrFacebookOption } from 'react-icons/gr';
import { RiTwitterXFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
function ScreenContainer({ children }) {
	const currentYear = new Date().getFullYear();
	const footerOptions = [
		{ title: 'Home', to: '/' },
		{ title: 'Search', to: '/search' },
		{ title: 'Favorites', to: '/favorites' },
		{ title: 'Categories', to: '/categories' },
	];
	return (
		<>
			<header className='bg-slate-800 px-5'></header>
			<main className='flex flex-col bg-slate-800 border-2 items-center'>
				{children}
			</main>
			<footer className='bg-slate-800 px-5 container mx-auto'>
				<div className='flex flex-col items-center  gap-5 md:flex-row py-20 md:gap-0'>
					<Link className='md:w-1/12 w-full' to='/'>
						<h2 class="font-['charmonman'] text-3xl font-bold text-gray-900 text-center tracking-wide md:mt-2">
							Nibbble
						</h2>
					</Link>
					<ul className='flex gap-10 flex-wrap md:w-10/12 md:ml-20'>
						{footerOptions.map((opt, index) => (
							<li
								className='text-gray-900 font-semibold text-sm'
								key={index + '_'}
							>
								<Link to={opt.to}>{opt.title}</Link>
							</li>
						))}
					</ul>
					<ul className='flex gap-5 pt-10 md:pt-0 md:w-1/12 md:justify-end'>
						<li>
							<LuInstagram size={20} className='text-gray-900' />
						</li>
						<li>
							<GrFacebookOption
								size={20}
								className='text-gray-900'
							/>
						</li>
						<li>
							<RiTwitterXFill
								size={20}
								className='text-gray-900'
							/>
						</li>
					</ul>
				</div>
				<div className=' w-full border-t-[0.1px] border-t-border-clr/60 pt-8 flex justify-center'>
					<h4 className='text-sm text-text-light'>
						&copy; {currentYear} Nibbble - All rights reserved
					</h4>
				</div>
			</footer>
		</>
	);
}
export default ScreenContainer;
