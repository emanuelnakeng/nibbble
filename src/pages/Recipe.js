import NavigationBar from '../components/header/NavigationBar';
import ScreenContainer from '../components/header/UI/ScreenContainer';

function Recipe() {
	return (
		<ScreenContainer>
			<NavigationBar />
			<main className='flex flex-row justify-between items-center w-full sm:w-11/12 md:w-8/12 '>
				<div>
					<img src='' alt='' />
					<div>
						<h2>Ingredients</h2>
					</div>
				</div>
				<div>
					<h1>Name</h1>
					<div>share</div>
					<div>detials</div>
					<div>
						<h3>Instructions</h3>
					</div>
				</div>
			</main>
		</ScreenContainer>
	);
}
export default Recipe;
