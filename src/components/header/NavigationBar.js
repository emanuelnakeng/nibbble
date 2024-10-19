import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';

function NavigationBar() {
	return (
		<header>
			{/* <nav className='flex h-[4rem]  items-center justify-between w-full sm:w-11/12 md:w-8/12'>
			<Link to='/'>
				<h2 className='text-xl italic font-bold'>Nibbble</h2>
			</Link>
			<ul>
				<li>
					<Link
						to='/favorites'
						className='flex flex-row items-center gap-2 '                                                        
					>
						<AiFillHeart size={16} />
						<p className='text-base font-medium'>My favorites</p>
					</Link>
				</li>             
			</ul>
		</nav> */}
		</header>
	);
}
export default NavigationBar;
