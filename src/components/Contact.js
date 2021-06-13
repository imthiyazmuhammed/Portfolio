import SendIcon from '@material-ui/icons/Send';

function Contact() {
	return (
		<div id="" className="text-white text-center max-w-4xl mx-auto my-16">
			<p className="font-bold text-3xl">Say something!</p>

			<section className="grid grid-flow-row grid-cols-3 p-5 focus:outline-none">
				<input type="text" placeholder="Name" className="input" />
				<input type="number" placeholder="Phone" className="input" />
				<input type="email" placeholder="Email" className="input" />
			</section>
			<form className="relative px-8">
				<SendIcon className="absolute top-8 right-14" />
				<input
					type="text"
					placeholder="Your message"
					className="input w-full mx-auto mb-10 flex-1 p-5 mr-4"
				/>
			</form>
		</div>
	);
}

export default Contact;
