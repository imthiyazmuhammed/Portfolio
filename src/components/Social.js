import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import { motion } from 'framer-motion';
import '../styles/globals.css';
import '../styles/social.scss';

import quickbill_customer from '../assets/stack-overflow.png';

function Social() {
	return (
		<div className="pt-1 bg-gradient-to-r from-gray-700 via-gray-700 to-gray-500">
			<motion.div
				className="flex flex-row justify-between overflow-x-auto"
				id="style-4">
				<a
					className="social "
					href="https://www.linkedin.com/in/imthiyaz-muhammed/">
					<LinkedInIcon />
					<p className="my-2 font-medium">LinkedIn</p>
				</a>
				<a
					className="social"
					href="https://stackoverflow.com/users/14120651/imthiyaz-muhammed">
					<div className="flex justify-center">
						<img src={quickbill_customer} className='w-6 h-6 rounded-md' />
					</div>
					<p className="my-2 font-medium">Stack Overflow</p>
				</a>
				<a className="social" href="https://github.com/imthiyazmuhammed">
					<GitHubIcon />
					<p className="my-2 font-medium">GitHub</p>
				</a>
				<a
					className="social "
					href="https://www.instagram.com/imthiyaz.muhammed/">
					<InstagramIcon />
					<p className="my-2 font-medium">Instagram</p>
				</a>
				<a
					className="social "
					href="https://www.facebook.com/imthiyaz.muhammed.560">
					<FacebookIcon />
					<p className="my-2 font-medium">Facebook</p>
				</a>
				<a className="social " href="https://twitter.com/mi35189136">
					<TwitterIcon />
					<p className="my-2 font-medium">Twitter</p>
				</a>
			</motion.div>
		</div>
	);
}

export default Social;
