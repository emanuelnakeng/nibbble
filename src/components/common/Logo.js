import { Link } from 'react-router-dom';

const Logo = ({ styles }) => {
	return (
		<Link className={`${styles}`} to='/'>
			<h2 className="font-['charmonman'] text-3xl md:text-2xl font-bold text-dark-clr text-center tracking-wide md:mt-3">
				Nibbble
			</h2>
		</Link>
	);
};

export default Logo;
