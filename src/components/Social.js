import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Social() {
	return (
		<div
			className="flex relative  bg-gray-700 overflow-x-auto text-center md:justify-center"
			id="style-4">
			<a
				className=" icon flex-col mx-10 md:mx-16 m-5 ml-12"
				href="https://github.com/imthiyazmuhammed">
				<GitHubIcon className="text-3xl" />
				<p className="my-2 font-medium">GitHub</p>
			</a>
			<a
				className=" icon flex-col mx-10 md:mx-16 m-5"
				href="https://www.linkedin.com/in/imthiyaz-muhammed/">
				<LinkedInIcon />
				<p className="my-2 font-medium">LinkedIn</p>
			</a>
			<a
				className=" icon flex-col mx-10 md:mx-16 m-5"
				href="https://www.instagram.com/imthiyaz.muhammed/">
				<InstagramIcon />
				<p className="my-2 font-medium">Instagram</p>
			</a>
			<a
				className=" icon flex-col mx-10 md:mx-16 m-5"
				href="https://www.facebook.com/imthiyaz.muhammed.560">
				<FacebookIcon />
				<p className="my-2 font-medium">Facebook</p>
			</a>
			<a
				className=" icon flex-col mx-10 md:mx-16 m-5 mr-2"
				href="https://twitter.com/mi35189136">
				<TwitterIcon />
				<p className="my-2 font-medium">Twitter</p>
			</a>
			<ArrowForwardIosIcon className="md:hidden absolute text-gray-900 top-9" />
		</div>
	);
}

export default Social;
