import ScreenContainer from '../components/common/ScreenContainer';
import Category from '../components/ui/Category';
import { categories } from '../utils/data';

function Categories() {
	return (
		<ScreenContainer>
			<section className='container mx-auto pt-5 w-full px-5'>
				<h2 className='font-bold text-2xl md:tex-3xl text-dark-clr'>
					Categories
				</h2>
				<div className='grid grid-cols-2 gap-5 md:grid-cols-6 py-10'>
					{categories.map((cat, i) => {
						return (
							<Category
								key={i + '_'}
								catName={cat.name}
								image={cat.imageURI}
							/>
						);
					})}
				</div>
			</section>
		</ScreenContainer>
	);
}
export default Categories;
