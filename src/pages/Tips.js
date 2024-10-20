import ScreenContainer from '../components/common/ScreenContainer';
import { categories } from '../utils/data';

function Tips() {
	return (
		<ScreenContainer>
			<section className='container mx-auto pt-5 w-full px-5'>
				<h2 className='font-bold text-3xl md:tex-3xl text-dark-clr'>
					Cooking tips
				</h2>
				<div className='flex flex-row flex-wrap w-full justify-center pt-10'>
					{categories.map(cat => {
						return (
							<article className='basis-1/2 md:basis-1/6 flex flex-col items-center py-5 gap-5'>
								<img
									src={cat.imageURI}
									alt={cat.name}
									className='w-48 h-48 rounded-full object-cover object-center'
								/>
								<h3 className='text-sm font-semibold text-dark-clr'>
									{cat.name}
								</h3>
							</article>
						);
					})}
				</div>
			</section>
		</ScreenContainer>
	);
}
export default Tips;
