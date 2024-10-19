import { Link } from 'react-router-dom';
import ScreenContainer from '../components/header/UI/ScreenContainer';

function NotFound() {
	return (
		<ScreenContainer>
			<section className='flex flex-col items-center justify-center w-screen h-dvh gap-5'>
				<h1 className='text-6xl text-dark-clr font-bold'>Error 404!</h1>
				<h3 className='text-sm text-dark-clr font-semibold'>
					Page not found
				</h3>
				<Link
					to='/'
					target=''
					className={`bg-accent-clr-light hover:bg-accent-clr hover:text-white py-3 px-6 rounded-full text-dark-clr font-semibold text-sm`}
				>
					Home page
				</Link>
			</section>
		</ScreenContainer>
	);
}
export default NotFound;
