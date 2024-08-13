import Quickbill_login from '../assets/quickbill_login.jpg';
import Quickbill_Home from '../assets/quickbill_home.jpg';
import Kuttys from '../assets/amazon_clone.jpg';
import kuttys_old from '../assets/kuttys_web.jpg';
import quickbill_customer from '../assets/quickbill_customer.jpg';
import aladdin from '../assets/aladdin365.png';
import a4u from '../assets/a4u.png';
import prakria1 from '../assets/prakria1.png';
import prakria2 from '../assets/prakria2.png';
import affiliate from '../assets/affiliate.png';

import { motion } from 'framer-motion';
function Body() {
	let images = [
		aladdin,
		a4u,
		prakria1,
		prakria2,
		affiliate,
		// Quickbill_login,
		// Quickbill_Home,
		// Kuttys,
		// kuttys_old,
		// facebook_clone,
		// quickbill_customer,
		// Quickbill_login,
		// Quickbill_Home,
		// Kuttys,
		// kuttys_old,
		// facebook_clone,
		// quickbill_customer,
	];
	let skills = [
		{ name: 'Javascript', color: '#95d5b2' },
		{ name: 'React Native', color: '#FCE22A' },
		{ name: 'CSS', color: '#a8dadc' },
		{ name: 'React JS', color: '#fff1e6' },
		{ name: 'AWS', color: '#EDDBC7' },
		{ name: 'Tailwind CSS', color: '#a5a58d' },
		{ name: 'HTML', color: '#e63946' },
		{ name: 'GIT', color: '#e85d04' },
		{ name: 'node JS', color: '#ffc6ff' },
		{ name: 'Express', color: '#ffd166' },
		{ name: 'no-SQL', color: '#fefae0' },
		{ name: 'Mongo-DB', color: '#52b69a' },
		{ name: 'Bootstrap', color: '#deaaff' },
		{ name: 'Next-js', color: '#e5e5e5' },
		{ name: 'Framer-Motion', color: '#f6bd60' },
		{ name: 'Material-UI', color: '#e56b6f' },
	];

	return (
		<div className="py-3 bg-gray-900 ">
			<div className="flex justify-center">
				<a href="#contact">
					<motion.button
						whileHover={{
							scale: 1.2,
							textShadow: '0px 0px 8px rgb(255,255,2555)',
							boxShadow: '0px 0px 8px rgb(255,255,2555)',
						}}
						whileTap={{
							scale: 1.2,
							textShadow: '0px 0px 8px rgb(255,255,2555)',
							boxShadow: '0px 0px 8px rgb(255,255,2555)',
						}}
						className=" focus:outline-none focus:ring-1 hover:bg-green-400  bg-green-300 py-2 px-5 my-3 rounded-full font-bold">
						Get In Touch
					</motion.button>
				</a>
			</div>

			<div className="flex-col  mx-3">
				<h5 className="text-white header">About me</h5>
				<p className="text-white mt-4 p-5 text-lg">
					&nbsp;&nbsp;&nbsp;&nbsp;With 3 years of experience in the industry, I've honed my skills in JavaScript, React, React Native, and Node, turning complex challenges into user-friendly solutions. My journey as a full-stack engineer has been fueled by a relentless curiosity and a commitment to excellence, whether I'm building cloud-based web applications or crafting REST APIs.

					In every project, I bring a blend of technical prowess and a keen business sense, ensuring that the solutions I create aren't just functional but also aligned with broader business goals. My passion for technology and business drives me to stay ahead of the curve, constantly learning and adapting to new trends.

					When I'm not coding, you might find me diving deep into the latest tech trends, exploring new business ideas, or revving up my engine as a dedicated petrolhead.
				</p>
				<ul className="text-white flex flex-col p-3 justify-center">
					<li className="align-center p-2 text-sm">👨🏾‍💻 Proficient Developer | Crafting seamless user experiences through clean code and innovative designs.</li>
					<li className="align-center p-2 text-sm">👨🏾‍💼 Business Enthusiast | Bridging the gap between technology and business, driving impactful solutions.</li>
					<li className="align-center p-2 text-sm">🤯 Curious by Nature | Constantly exploring new ideas and pushing the boundaries of what's possible. </li>
					<li className="align-center p-2 text-sm">⚙ Tech Enthusiast | Deeply immersed in the latest trends, always ready to dive into the next big thing.
					</li>
					<li className="align-center p-2 text-sm">🏎 Petrolhead | Passionate about speed, precision, and the thrill of the ride.</li>
				</ul>
			</div>

			<div className="">
				<h5 className="text-white header">My Development Toolkit</h5>
				<div className="flex  mx-4  flex-wrap content-between text-grey-700 p-5">
					{skills.map((skill) => (
						<button
							style={{ backgroundColor: `${skill.color}` }}
							className="px-5 text-gray py-2 focus:outline-none rounded-full m-3">
							{skill.name}
						</button>
					))}
				</div>
			</div>
			<div className="">
				<h5 className="text-white header">What I've Built</h5>
				<div className="flex gap-10 overflow-x-auto w-full" id="style-4">
					{images.map((image) => (
						<div className='relative flex-shrink-0 min-w-[250px]'>
							<motion.img
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 1.05 }}
								src={image}
								className="w-auto h-60 object-contain z-0 rounded-lg "
							/>
							<div class="w-auto h-60 opacity-0 hover:opacity-90 duration-300 absolute inset-0 z-10 flex justify-center items-center text-l bg-gray-300 rounded-lg">
								<p className='text-black font-semibold leading-5 ml-2'>Get in touch to know more on this project</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="">
				<h5 className="text-white header z-10">What I Build</h5>
				<div className="">
					<p className="text-white bg-gray-800 rounded-2xl p-5  mx-4 my-5">
						<h6 className="font-bold m-1 text-center">🚀 High-Performance Web Apps</h6>
						<br></br>&nbsp;&nbsp;I specialize in crafting cloud-based web applications that are not only visually appealing but also deliver exceptional performance and scalability. By leveraging modern frameworks like React for the front-end and Node.js for the back-end, I ensure that these applications can handle high traffic while maintaining a seamless user experience. My focus on security and scalability means that these applications can grow alongside your business, adapting to new challenges and user demands effortlessly.
					</p>
					<p className="text-white bg-gray-800 rounded-2xl p-5 mx-4  my-5">
						<h6 className="font-bold m-1 text-center">📱 Seamless Mobile Experiences</h6>
						<br></br>&nbsp;&nbsp;I develop mobile applications that provide consistent and high-quality experiences across both iOS and Android platforms. By using React Native, I ensure that users enjoy a native-like experience with smooth navigation and responsive design. Whether it’s integrating real-time data with Firebase or implementing offline capabilities, my mobile apps are built to engage users, keep them coming back, and function reliably under varying network conditions.
					</p>
					<p className="text-white bg-gray-800 rounded-2xl p-5 mx-4  my-5">
						<h6 className="font-bold m-1 text-center">🔧 Scalable Backend Systems</h6>
						<br></br>&nbsp;&nbsp;My expertise extends to building backend systems that are the backbone of robust and scalable applications. These systems are designed to handle complex business logic, large datasets, and high traffic volumes efficiently. By using technologies like Docker for containerization and Express for a flexible server-side architecture, I ensure that backend systems are easy to deploy, maintain, and scale. Security, performance, and reliability are at the core of my backend solutions, making sure they meet the demands of modern applications.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Body;
