import { RiTimerLine } from 'react-icons/ri';
import { BsGlobeCentralSouthAsia } from 'react-icons/bs';
import { Link } from 'react-router-dom';
function Recipe() {
	return (
		<Link className='border border-border-clr rounded-2xl'>
			<img
				src={
					'https://images.unsplash.com/photo-1432139555190-58524dae6a55?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				}
				alt=''
				className='w-full h-72 object-cover rounded-t-2xl'
			/>
			<div className='p-5 flex flex-col gap-3 break-all '>
				<h3 className='font-bold text-dark-clr leading-snug'>
					Mala modogu and rices and rice and rice and more rice
				</h3>
				<div className='flex justify-between'>
					<div className='flex items-center gap-2'>
						<RiTimerLine size={14} color='#7f7f7f' />
						<p className='text-sm text-text-light'>5 mins</p>
					</div>
					<div className='flex items-center gap-2'>
						<BsGlobeCentralSouthAsia size={14} color='#7f7f7f' />
						<p className='text-sm text-text-light'>Chinese</p>
					</div>
				</div>
			</div>
		</Link>
	);
}
export default Recipe;
