import photo from '../assets/photo.png';
import { motion } from 'framer-motion';

function Profile() {
	const list = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
		transition: { duration: 3 },
	};
	return (
		<motion.div
			initial={{ x: '100vw' }}
			animate={{ x: 0 }}
			transition={{ delay: 0.1, type: 'spring', stiffness: 120 }}
			className="flex bg-gray-900 justify-evenly">
			<div className="my-10 drop-shadow-2xl">
				<motion.img
					/* animate={{ rotate: 360 }} */
					src={photo}
					className="w-20 md:w-56 rounded-xl bg-gray-600"
				/>
			</div>

			<div className=" my-10 md:my-16">
				<p className="text-white font-thin md:font-normal">I am</p>
				<motion.h2
					animate={{ color: '#fff', fontSize: 50, duration: 0.3 }}
					className="font-bold text-base md:text-5xl tracking-wider">
					Imthiyaz Muhammed
				</motion.h2>
				<p className="text-green-400 font-bold mt-4 md:text-xl md:mt-8">
					Web Developer
				</p>
				<p className="text-white font-extralight mt-0 md:text-xl">
					Based in Kozhikode
				</p>
			</div>
		</motion.div>
	);
}

export default Profile;
