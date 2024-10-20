import { CgMenuRight } from 'react-icons/cg';
import { useState } from 'react';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import SocialIcons from './SocialIcons';

function ScreenContainer({ children }) {
	const currentYear = new Date().getFullYear();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<header className='bg-bg-clr'>
				<div className='container mx-auto w-full justify-end px-5 py-3 border-b-[0.1px] border-b-border-clr/60 hidden sm:flex'>
					<SocialIcons size={16} iconsColor='#180b06' styles='' />
				</div>
				<div className='container mx-auto w-full pt-10 pb-5 flex justify-between items-center px-5'>
					<Logo />
					<nav>
						{!menuOpen && (
							<CgMenuRight
								size={26}
								className='md:hidden'
								onClick={() => setMenuOpen(true)}
							/>
						)}
						<Navigation styles='hidden md:flex gap-16' />
						{menuOpen && (
							<MobileMenu onClose={() => setMenuOpen(false)} />
						)}
					</nav>
				</div>
			</header>
			<main className='bg-bg-clr mx-auto px-5'>{children}</main>
			<footer className='bg-bg-clr pb-10'>
				<div className='bg-bg-clr px-5 container  mx-auto'>
					<div className='flex flex-col items-center  gap-5 md:flex-row py-12 md:gap-0'>
						<Logo styles='md:w-1/12 w-full' />
						<Navigation styles='flex gap-10 flex-wrap md:w-10/12 md:ml-20' />
						<SocialIcons
							size={20}
							iconsColor='#180b06'
							styles='pt-10 md:pt-0 md:w-1/12 md:justify-end'
						/>
					</div>
					<div className='w-full border-t-[0.1px] border-t-border-clr/60 pt-8 flex justify-center'>
						<h4 className='text-sm text-text-light'>
							&copy; {currentYear} <strong>Nibbble</strong> - All
							rights reserved
						</h4>
					</div>
				</div>
			</footer>
		</>
	);
}
export default ScreenContainer;
