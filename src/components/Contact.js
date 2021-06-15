import SendIcon from '@material-ui/icons/Send';
import { motion } from 'framer-motion';

function Contact() {
	/* 	const input = {
		focus: { scale: 1.4 },
	}; */
	return (
		<div
			className="max-w-4xl m-auto"
			id="contact"
			className="text-white text-center my-16">
			<p className="font-bold text-3xl">Say something!</p>
			<form
				className=""
				name="Contact v1"
				action="https://formspree.io/f/xpzkrlgd"
				method="POST"
				onsubmit="submit">
				<div className="grid grid-flow-row grid-cols-3 p-3 mt-5 focus:outline-none">
					<motion.input
						whileFocus={{ scale: 1.5, originX: 0 }}
						type="text"
						placeholder="Name"
						name="name"
						className="input"
					/>
					<input type="hidden" name="_next" value="/thanks.html"></input>
					<motion.input
						whileFocus={{ scale: 1.5 }}
						type="number"
						placeholder="Phone"
						className="input"
						name="phone"
					/>
					<motion.input
						whileFocus={{ scale: 1.5, originX: 1 }}
						type="email"
						placeholder="Email"
						className="input"
						name="_replyto"
					/>
				</div>

				<div className="relative px-4">
					<button type="submit">
						<SendIcon className="absolute top-12 right-10 cursor-pointer" />
					</button>
					<textarea
						rows="2"
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
