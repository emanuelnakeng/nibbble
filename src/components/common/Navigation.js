import { navOptions } from '../../utils/data';
import { Link } from 'react-router-dom';

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

export default Navigation;
