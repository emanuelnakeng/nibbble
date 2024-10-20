import { Link } from 'react-router-dom';

function Button({ to, children, styles, newTab }) {
	return (
		<Link
			to={to}
			target={newTab ? '_blank' : ''}
			className={`py-3 px-8 rounded-full font-semibold text-sm ${styles} transition ease-in-out delay-200`}
		>
			{children}
		</Link>
	);
}
export default Button;
