import { GiKnifeFork } from 'react-icons/gi';
import { PiGlobeHemisphereEastBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
function Recipe({ id, image, mealName, category, cuisine }) {
	return (
		<Link
			className='border border-border-clr rounded-3xl'
			to={`/recipe/${id}`}
			key={id}
		>
			<img
				src={image}
				alt={mealName}
				className='w-full h-72 object-cover rounded-t-3xl'
			/>
			<div className='p-5 flex flex-col gap-3 bg-white rounded-b-3xl'>
				<h3 className='font-bold text-dark-clr leading-relaxed'>
					{mealName}
				</h3>
				<div className='flex justify-between'>
					<div className='flex items-center gap-2'>
						<PiGlobeHemisphereEastBold size={14} color='#7f7f7f' />
						<p className='text-sm text-text-light capitalize'>
							{category}
						</p>
					</div>
					<div className='flex items-center gap-2'>
						<GiKnifeFork size={14} color='#7f7f7f' />
						<p className='text-sm text-text-light capitalize'>
							{cuisine}
						</p>
					</div>
				</div>
			</div>
		</Link>
	);
}
export default Recipe;
