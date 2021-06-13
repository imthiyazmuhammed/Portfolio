import Quickbill_login from '../assets/quickbill_login.jpg';
import Quickbill_Home from '../assets/quickbill_home.jpg';
import Kuttys from '../assets/amazon_clone.jpg';
import kuttys_old from '../assets/kuttys_web.jpg';
import quickbill_customer from '../assets/quickbill_customer.jpg';
import facebook_clone from '../assets/facebook__clone.jpg';

function Body() {
	return (
		<div className="py-3 bg-gray-900 max-w-4xl mx-auto ">
			<div className="flex justify-center">
				<button
					href="index.html#contact"
					className=" focus:outline-none focus:ring-1 hover:bg-green-400  bg-green-300 py-2 px-5 my-3 rounded-full font-bold">
					Get In Touch
				</button>
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
				<div className="flex  mx-3  flex-wrap content-between text-grey-700 p-5">
					<button className="px-5  py-2  bg-yellow-300 rounded-full m-3">
						Javascript
					</button>
					<button className="px-5 py-2  bg-red-300 rounded-full m-3">
						HTML
					</button>
					<button className="px-5  py-2 bg-blue-300 rounded-full m-3">
						CSS
					</button>
					<button className="px-5  py-2 bg-gray-300 rounded-full m-3">
						React.js
					</button>
					<button className="px-5  py-2 bg-green-300 rounded-full m-3">
						Tailwindcss
					</button>
					<button className="px-5 py-2  bg-indigo-300 rounded-full m-3">
						GIT
					</button>
					<button className="px-5  py-2 bg-purple-300 rounded-full m-3">
						Node.js express
					</button>
					<button className="px-5  py-2 bg-pink-300 rounded-full m-3">
						no-SQL
					</button>
					<button className="px-5 bg-blue-400 rounded-full m-3">
						mongo-DB
					</button>
					<button className="px-5  py-2 bg-yellow-400 rounded-full m-3">
						Bootstrap
					</button>
					<button className="px-5  py-2 bg-red-400 rounded-full m-3">
						material-UI
					</button>
					<button className="px-5  py-2 bg-purple-200 rounded-full m-3">
						NEXT-JS
					</button>
				</div>
			</div>
			<div className="">
				<h5 className="text-white  header">What I have built</h5>
				<div className="flex overflow-x-auto cursor-pointer " id="style-4">
					<img
						src={Quickbill_login}
						className="w-44  h-52 object-contain rounded-2xl m-3 mx-5"
					/>
					<img
						src={Quickbill_Home}
						className="w-40 h-52 object-contain rounded-2xl m-3  mx-5"
					/>
					<img
						src={Kuttys}
						className="w-40 rounded-2xl h-52 object-contain m-3  mx-5"
					/>
					<img
						src={facebook_clone}
						className="w-82 h-52 rounded-2xl m-3 object-contain mx-5"
					/>
					<img
						src={kuttys_old}
						className="w-40 rounded-2xl h-52 m-3 object-contain mx-5"
					/>
					<img
						src={quickbill_customer}
						className="w-82 h-52 rounded-2xl m-3 object-contain mx-5"
					/>
				</div>
			</div>
			<div className="">
				<h5 className="text-white header">What I Builds</h5>
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
