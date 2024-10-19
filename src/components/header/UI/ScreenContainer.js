import { LuInstagram } from 'react-icons/lu';
import { GrFacebookOption, GrFormClose } from 'react-icons/gr';
import { RiTwitterXFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { CgMenuRight } from 'react-icons/cg';
import { useState } from 'react';

const navOptions = [
	{ title: 'Home', to: '/' },
	{ title: 'Search', to: '/search' },
	{ title: 'Favorites', to: '/favorites' },
	{ title: 'Categories', to: '/categories' },
];

function ScreenContainer({ children }) {
	const currentYear = new Date().getFullYear();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<header className='bg-bg-clr'>
				<div className='container mx-auto w-full justify-end px-5 py-3 border-b-[0.1px] border-b-border-clr/60 hidden sm:flex'>
					<SocialIcons size={16} iconsColor='#180b06' styles='' />
				</div>
				<div className='container mx-auto w-full py-5 flex justify-between items-center px-5'>
					<Logo />
					<nav>
						{!menuOpen && (
							<CgMenuRight
								size={20}
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
			<main className='bg-bg-clr mx-auto py-5 px-5'>{children}</main>
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

const SocialIcons = ({ size, iconsColor, styles }) => {
	return (
		<ul className={`flex gap-5 ${styles} `}>
			<li>
				<LuInstagram
					size={size}
					color={iconsColor}
					className='cursor-pointer'
				/>
			</li>
			<li>
				<GrFacebookOption
					size={size}
					color={iconsColor}
					className='cursor-pointer'
				/>
			</li>
			<li>
				<RiTwitterXFill
					size={size}
					color={iconsColor}
					className='cursor-pointer'
				/>
			</li>
		</ul>
	);
};

const Logo = ({ styles }) => {
	return (
		<Link className={`${styles}`} to='/'>
			<h2 className="font-['charmonman'] text-2xl font-extrabold text-dark-clr text-center tracking-wide md:mt-3">
				Nibbble
			</h2>
		</Link>
	);
};

const Navigation = ({ styles }) => {
	return (
		<ul className={`${styles}`}>
			{navOptions.map((opt, index) => (
				<li
					className='text-dark-clr font-semibold text-sm hover:text-accent-clr transition ease-in-out delay-200'
					key={index + '_'}
				>
					<Link to={opt.to}>{opt.title}</Link>
				</li>
			))}
		</ul>
	);
};

const MobileMenu = ({ onClose }) => {
	return (
		<div className='fixed p-5 right-0 top-0 md:hidden w-screen '>
			<div className='flex flex-col items-end pb-5'>
				<GrFormClose size={22} color='#ff642f' onClick={onClose} />
			</div>
			<Navigation styles='flex flex-col gap-8' />
		</div>
	);
};
