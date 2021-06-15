import Quickbill_login from '../assets/quickbill_login.jpg';
import Quickbill_Home from '../assets/quickbill_home.jpg';
import Kuttys from '../assets/amazon_clone.jpg';
import kuttys_old from '../assets/kuttys_web.jpg';
import quickbill_customer from '../assets/quickbill_customer.jpg';
import facebook_clone from '../assets/facebook__clone.jpg';
import { motion } from 'framer-motion';
function Body() {
	let images = [
		Quickbill_login,
		Quickbill_Home,
		Kuttys,
		kuttys_old,
		facebook_clone,
		quickbill_customer,
		Quickbill_login,
		Quickbill_Home,
		Kuttys,
		kuttys_old,
		facebook_clone,
		quickbill_customer,
	];
	let skills = [
		{ name: 'Javascript', color: '#95d5b2' },
		{ name: 'HTML', color: '#e63946' },
		{ name: 'CSS', color: '#a8dadc' },
		{ name: 'REACT.js', color: '#fff1e6' },
		{ name: 'Tailwind.css', color: '#a5a58d' },
		{ name: 'GIT', color: '#e85d04' },
		{ name: 'NODE.js', color: '#ffc6ff' },
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
				<h5 className="text-white header   ">Myself</h5>
				<p className="text-white mt-4 p-5">
					&nbsp;&nbsp;&nbsp;&nbsp;Just a Developer who loves to build things
					with creativity, curiosity and conscientious. When it comes to
					developing Websites, nothing makes me much involved. I honestly loves
					to think about how things work and always admired to make something
					where I could be a part of the changing and making a better brighter
					world for tomorrow. and as a profession, they both get coupled in web
					development. I don't like to leave something behind incomplete, not to
					make "something better than nothing" instead make it more than
					everything.
				</p>
				<p className="text-white mt-2  p-5">
					&nbsp;&nbsp;&nbsp;&nbsp;I was raised in a small village named Chaliyam
					in Kozhikode district in Kerala, India. To be frank, the education
					system doesn't function as it is supposed to do, as an ambitious
					person I developed several skills to become a better version of myself
					in the meantime while I am pursuing my bachelor's degree in Computer
					applications from University of Calicut, honestly, this progress
					guided me to a different level of self esteem, looking forward as a
					profession and a passion, not only the web developer role suits me, I
					love to be in it as myself!
				</p>
			</div>

			<div className="">
				<h5 className="text-white header">What I use in development</h5>
				<div className="flex  mx-4  flex-wrap content-between text-grey-700 p-5">
					{skills.map((skill) => (
						<button
							style={{ backgroundColor: `${skill.color}` }}
							className="px-5 text-gray py-2 rounded-full m-3">
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
						<h6 className="font-bold m-1 text-center">Web apps</h6>
						<br></br>&nbsp;&nbsp; building Web apps that are not only meant to
						load faster as they are cached in your device itself but also to
						make it completely mobile first and still responsive to match every
						screen your users use by providing a highly efficient design and
						development process using modern development tools like React and
						several styleoptions.
					</p>

					<p className="text-white bg-gray-800 rounded-2xl p-5 mx-4  my-5">
						<h6 className="font-bold m-1 text-center">Mobile applications</h6>
						<br></br>&nbsp;&nbsp; Managing your user's with android and ios
						devices with two different products is definitely a hassle, here
						comes the power of native apps built with react-Native where a
						single product can deliver service to different platforms with
						awesome user interfaces and responsive features
					</p>
					<p className="text-white bg-gray-800 rounded-2xl p-5 mx-4  my-5">
						<h6 className="font-bold m-1 text-center">Front-end Designs</h6>
						<br></br>&nbsp;&nbsp; Managing your user's with android and ios
						devices with two different products is definitely a hassle, here
						comes the power of native apps built with react-Native where a
						single product can deliver service to different platforms with
						awesome user interfaces and responsive features
					</p>
				</div>
			</div>
		</div>
	);
}

export default Body;
