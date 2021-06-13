import SendIcon from '@material-ui/icons/Send';

function Contact() {
	return (
		<div id="" className="text-white text-center max-w-4xl mx-auto my-16">
			<p className="font-bold text-3xl">Say something!</p>
			<form className="" action="POST" data-netlify="true">
				<section className="grid grid-flow-row grid-cols-3 p-3 mt-5 focus:outline-none">
					<input type="text" placeholder="Name" name="name" className="input" />
					<input
						type="number"
						placeholder="Phone"
						className="input"
						name="phone"
					/>
					<input
						type="email"
						placeholder="Email"
						className="input"
						name="email"
					/>
				</section>

				<div className="relative px-4">
					<SendIcon
						type="button"
						className="absolute top-5 right-12 cursor-pointer"
					/>
					<input
						name="message"
						type="text"
						placeholder="Your message"
						className="input w-full mx-auto mb-10 flex-1 p-5 mr-4"
					/>
				</div>
			</form>
		</div>
	);
}

export default Contact;
