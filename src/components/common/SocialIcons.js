import { LuInstagram } from 'react-icons/lu';
import { GrFacebookOption } from 'react-icons/gr';
import { RiTwitterXFill } from 'react-icons/ri';

const SocialIcons = ({ size, iconsColor, styles }) => {
	return (
		<ul className={`flex gap-5 ${styles} `}>
			<li>
				<a href='/#'>
					<LuInstagram
						size={size}
						color={iconsColor}
						className='cursor-pointer'
					/>
				</a>
			</li>
			<li>
				<a href='/#'>
					<GrFacebookOption
						size={size}
						color={iconsColor}
						className='cursor-pointer'
					/>
				</a>
			</li>
			<li>
				<a href='/#'>
					<RiTwitterXFill
						size={size}
						color={iconsColor}
						className='cursor-pointer'
					/>
				</a>
			</li>
		</ul>
	);
};

export default SocialIcons;
