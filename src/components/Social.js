import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { motion } from 'framer-motion';
import '../styles/globals.css';
import '../styles/social.scss';

function Social() {
	return (
		<div className="slider bg-gray-700 py-3">
			<motion.div className="slide-track" id="style-4">
				<a className="slide social" href="https://github.com/imthiyazmuhammed">
					<GitHubIcon className="text-3xl" />
					<p className="my-2 font-medium">GitHub</p>
				</a>
				<a
					className="slide social "
					href="https://www.linkedin.com/in/imthiyaz-muhammed/">
					<LinkedInIcon />
					<p className="my-2 font-medium">LinkedIn</p>
				</a>
				<a
					className="slide social "
					href="https://www.instagram.com/imthiyaz.muhammed/">
					<InstagramIcon />
					<p className="my-2 font-medium">Instagram</p>
				</a>
				<a
					className="slide social "
					href="https://www.facebook.com/imthiyaz.muhammed.560">
					<FacebookIcon />
					<p className="my-2 font-medium">Facebook</p>
				</a>
				<a className="slide social " href="https://twitter.com/mi35189136">
					<TwitterIcon />
					<p className="my-2 font-medium">Twitter</p>
				</a>
				<a className="slide social " href="https://github.com/imthiyazmuhammed">
					<GitHubIcon className="text-3xl" />
					<p className="my-2 font-medium">GitHub</p>
				</a>
				<a
					className="slide social "
					href="https://www.linkedin.com/in/imthiyaz-muhammed/">
					<LinkedInIcon />
					<p className="my-2 font-medium">LinkedIn</p>
				</a>
				<a
					className="slide social "
					href="https://www.instagram.com/imthiyaz.muhammed/">
					<InstagramIcon />
					<p className="my-2 font-medium">Instagram</p>
				</a>
				<a
					className="slide social "
					href="https://www.facebook.com/imthiyaz.muhammed.560">
					<FacebookIcon />
					<p className="my-2 font-medium">Facebook</p>
				</a>
				<a className="slide social " href="https://twitter.com/mi35189136">
					<TwitterIcon />
					<p className="my-2 font-medium">Twitter</p>
				</a>
				<a className="slide social " href="https://github.com/imthiyazmuhammed">
					<GitHubIcon className="text-3xl" />
					<p className="my-2 font-medium">GitHub</p>
				</a>
				<a
					className="slide social "
					href="https://www.linkedin.com/in/imthiyaz-muhammed/">
					<LinkedInIcon />
					<p className="my-2 font-medium">LinkedIn</p>
				</a>
				<a
					className="slide social "
					href="https://www.instagram.com/imthiyaz.muhammed/">
					<InstagramIcon />
					<p className="my-2 font-medium">Instagram</p>
				</a>
				<a
					className="slide social "
					href="https://www.facebook.com/imthiyaz.muhammed.560">
					<FacebookIcon />
					<p className="my-2 font-medium">Facebook</p>
				</a>
				<a className="slide social " href="https://twitter.com/mi35189136">
					<TwitterIcon />
					<p className="my-2 font-medium">Twitter</p>
				</a>
			</motion.div>
		</div>
	);
}

export default Social;
