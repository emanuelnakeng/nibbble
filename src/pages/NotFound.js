import ScreenContainer from '../components/common/ScreenContainer';
import Button from '../components/common/Button';

function NotFound() {
	return (
		<ScreenContainer>
			<section className='container mx-auto flex flex-col items-center justify-center w-screen h-[75vh] gap-5 px-5'>
				<h1 className='text-4xl md:text-5xl text-dark-clr font-bold text-center'>
					Lost in space...404
				</h1>
				<h3 className='text-sm text-dark-clr font-semibold'>
					Page was not found
				</h3>
				<Button
					styles='bg-accent-clr-light hover:bg-accent-clr hover:text-white text-dark-clr'
					to='/'
				>
					Home page
				</Button>
			</section>
		</ScreenContainer>
	);
}
export default NotFound;
