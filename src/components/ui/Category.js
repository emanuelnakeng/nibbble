import { Link } from 'react-router-dom';

function Category({ image, catName }) {
	return (
		<Link
			className='flex flex-col items-center gap-5 rounded-full'
			to={`/${catName.toLowerCase()}`}
		>
			<img
				src={image}
				alt={catName}
				className='w-48 h-48 rounded-full object-cover object-center'
			/>
			<h3 className='text-sm font-semibold text-dark-clr'>{catName}</h3>
		</Link>
	);
}

export default Category;
