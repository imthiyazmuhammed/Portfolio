import Quickbill_login from '../assets/quickbill_login.jpg';
import Quickbill_Home from '../assets/quickbill_home.jpg';
import Kuttys from '../assets/amazon_clone.jpg';
import kuttys_old from '../assets/kuttys_web.jpg';
import quickbill_customer from '../assets/quickbill_customer.jpg';
import facebook_clone from '../assets/facebook__clone.jpg';
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
		Quickbill_login,
		Quickbill_Home,
		// Kuttys,
		// kuttys_old,
		// facebook_clone,
		quickbill_customer,
		// Quickbill_login,
		// Quickbill_Home,
		Kuttys,
		kuttys_old,
		facebook_clone,
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
				<h5 className="text-white header">Myself</h5>
				<p className="text-white mt-4 p-5">
					&nbsp;&nbsp;&nbsp;&nbsp;Experienced full-stack engineer with a proven track record of delivering high-quality software solutions. With 3 years of industry experience, I specialize in JavaScript, React, React Native, and Node, with expertise in planning and executing complex cloud-based web applications and REST APIs. My strong passion for developing user-friendly software, coupled with excellent communication and managerial skills, enables me to excel in dynamic project environments. I thrive on learning new concepts and staying abreast of industry trends, and I'm enthusiastic about exploring innovative solutions at the intersection of technology and business.
				</p>
				{/* <p className="text-white mt-2  p-5">
					&nbsp;&nbsp;&nbsp;&nbsp;I was raised in a small village named Chaliyam
					in Kozhikode district in Kerala, India. To be frank, the education
					system doesn't function as it is supposed to do, as an ambitious
					person I developed several skills to become a better version of myself
					in the meantime while I am pursuing my bachelor's degree in Computer
					applications from University of Calicut, honestly, this progress
					guided me to a different level of self esteem, looking forward as a
					profession and a passion, not only the web developer role suits me, I
					love to be in it as myself!
				</p> */}
				<div className="pl-16">
					<h4 className="text-white font-bold pt-5">In short, I am a</h4>
					<ul className="text-white flex flex-col p-3 justify-center">
						<li className="align-center p-2 text-lg">👨🏾‍💻 Proficient Developer</li>
						<li className="align-center p-2 text-lg">👨🏾‍💼 Business Enthusiast</li>
						<li className="align-center p-2 text-lg">🤯 Curious by nature </li>
						<li className="align-center p-2 text-lg">🏎 Petrolhead</li>
						<li className="align-center p-2 text-lg">⚙ Tech Enthusiast</li>
					</ul>
				</div>
			</div>

			<div className="">
				<h5 className="text-white header">What I use in development</h5>
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
				<h5 className="text-white header">What I have built</h5>
				<div className="flex cursor-pointer overflow-x-auto" id="style-4">
					{images.map((image) => (
						<motion.img
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 1.1 }}
							src={image}
							className="w-auto h-60 object-contain rounded-2xl my-5 mx-2"
						/>
					))}
				</div>
			</div>
			<div className="">
				<h5 className="text-white header z-10">What I Builds</h5>
				<div className="">
					<p className="text-white bg-gray-800 rounded-2xl p-5  mx-4 my-5">
						<h6 className="font-bold m-1 text-center">Web Apps</h6>
						<br></br>&nbsp;&nbsp; Web applications built with React and other efficient JavaScript libraries offer numerous benefits for both developers and users. React, a popular JavaScript library for building user interfaces, allows for efficient and fast updates to the web page without the need for a full reload. This results in a smoother and more responsive user experience. Additionally, other libraries like Redux and React Router can be utilized to manage the state of the application and handle navigation, further enhancing the efficiency of the product.
					</p>
					<p className="text-white bg-gray-800 rounded-2xl p-5 mx-4  my-5">
						<h6 className="font-bold m-1 text-center">Mobile Applications</h6>
						<br></br>&nbsp;&nbsp; Mobile applications built with React Native provide a unique solution for businesses looking to create cross-platform apps. React Native allows for the creation of native mobile apps using JavaScript and the React framework, making it a cost-effective and efficient choice. The apps built using React Native have a similar performance to those built using traditional native development languages like Java and Swift, but with the added advantage of being able to reuse code between iOS and Android platforms. This results in faster development time and reduced costs.
					</p>
					<p className="text-white bg-gray-800 rounded-2xl p-5 mx-4  my-5">
						<h6 className="font-bold m-1 text-center">Backend Systems</h6>
						<br></br>&nbsp;&nbsp; Backend systems built with Node and Express provide a fast, efficient, and scalable solution for modern web applications. Node.js, a powerful JavaScript runtime environment, allows for the creation of server-side applications that handle high amounts of data and traffic with ease. The Express framework, built on top of Node, provides a simple and flexible way to handle routing and middleware, making it a popular choice for creating backend systems. With its fast performance and extensive library of modules, Node and Express can handle a variety of tasks, such as database integration, authentication, and file handling, making it a versatile choice for businesses and developers. The use of JavaScript on both the frontend and backend also allows for a seamless integration between the two, providing a unified and efficient development experience.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Body;
