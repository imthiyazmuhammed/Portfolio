import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
// import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

import Resume from "../assets/Resume-MUHAMMED-IMTHIYAZ.pdf"
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className=" flex p-3 justify-between bg-gray-900  ">
			<div className="">
				<AllInclusiveIcon className="icon ml-3" />
			</div>
			<div className="space-x-3 cursor-pointer">
				{/* <BusinessCenterIcon className="icon" /> */}
				<a
					href={Resume}
					download="Resume-MUHAMMED-IMTHIYAZ"
					target="_blank"
					rel="noreferrer"
				>
					<p>Download resume</p>
				</a>
			</div>
		</div>
	);
}

export default Header;
