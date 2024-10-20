import { GrFormClose } from 'react-icons/gr';
import Navigation from './Navigation';

const MobileMenu = ({ onClose }) => {
	return (
		<div className='fixed py-5 pl-10 pr-5 right-0 top-0 md:hidden w-screen h-[50vh] bg-bg-clr'>
			<div className='flex flex-col items-end pb-5'>
				<GrFormClose size={30} color='#ff642f' onClick={onClose} />
			</div>
			<Navigation styles='flex flex-col gap-8' />
		</div>
	);
};

export default MobileMenu;
