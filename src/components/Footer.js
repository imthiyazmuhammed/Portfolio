import CopyrightIcon from '@material-ui/icons/Copyright';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';

function Footer() {
	return (
		<div className="flex-row md:flex justify-around bg-gray-600 p-10 text-white">
			<div className="flex my-5">
				<a href="tel:+918089866696">
					<PhoneIcon className="mx-4 cursor-pointer" />
				</a>
				<a href="https://wa.me/+918089866696?text=Hello%20">
					<WhatsAppIcon className="mx-4 cursor-pointer" />
				</a>
				<a href="mailto:imthiyaz.muhd@gmail.com">
					<EmailIcon className="mx-4 cursor-pointer" />
				</a>
			</div>
			<div className="flex text-center my-5">
				<CopyrightIcon className="mx-3" />
				<h1>Imthiyaz Muhammed - 2023</h1>
			</div>
		</div>
	);
}

export default Footer;
