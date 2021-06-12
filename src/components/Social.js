import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Social() {
	return (
		<div className="flex relative bg-gray-700 overflow-x-auto text-center md:justify-center">
			<div className=" icon flex-col mx-10 md:mx-16 m-5 ml-12">
				<GitHubIcon className="text-3xl" />
				<p className="my-2 font-medium">GitHub</p>
			</div>
			<div className=" icon flex-col mx-10 md:mx-16 m-5">
				<LinkedInIcon />
				<p className="my-2 font-medium">LinkedIn</p>
			</div>
			<div className=" icon flex-col mx-10 md:mx-16 m-5">
				<InstagramIcon />
				<p className="my-2 font-medium">Instagram</p>
			</div>{' '}
			<div className=" icon flex-col mx-10 md:mx-16 m-5">
				<FacebookIcon />
				<p className="my-2 font-medium">Facebook</p>
			</div>{' '}
			<div className=" icon flex-col mx-10 md:mx-16 m-5">
				<TwitterIcon />
                <p className="my-2 font-medium">Twitter</p>
            </div>
            <ArrowForwardIosIcon className="sm:hidden absolute text-gray-900 top-9"/>
		</div>
	);
}

export default Social;
