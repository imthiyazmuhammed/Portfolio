import photo from '../assets/photo.png';
function Profile() {
	return (
		<div className="flex bg-gray-900 justify-evenly">
			<div className="my-10 drop-shadow-2xl">
				<img src={photo} className="w-20 md:w-56 rounded-xl bg-gray-400" />
			</div>
			<div className="text-white my-10 md:my-16">
				<p className="font-thin md:font-normal">I am</p>
				<p className="font-extrabold text-2xl md:text-5xl tracking-wide">Imthiyaz Muhammed</p>
				<p className="text-green-400 font-bold mt-4 md:text-xl md:mt-8">
					Web Developer
				</p>
				<p className="font-extralight mt-0 md:text-xl">Based in Kozhikode</p>
			</div>
		</div>
	);
}

export default Profile;
