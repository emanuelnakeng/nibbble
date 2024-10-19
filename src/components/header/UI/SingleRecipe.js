import { Link } from 'react-router-dom';

function SingleRecipe({ image, recipeName, category }) {
	return (
		<Link className='w-full sm:w-2/6'>
			<img src={image} alt={recipeName} className='object-contain' />
			<h3>{recipeName}</h3>
			<p>{category}</p>
		</Link>
	);
}
export default SingleRecipe;
