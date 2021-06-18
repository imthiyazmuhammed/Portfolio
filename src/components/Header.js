import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Brightness4Icon from '@material-ui/icons/Brightness4';

function Header() {
	return (
		<div className=" flex p-3 justify-between bg-gray-900  ">
			<div className="">
				<AllInclusiveIcon className="icon ml-3" />
			</div>
			<div className="space-x-7">
				<BusinessCenterIcon className="icon" />
			</div>
		</div>
	);
}

export default Header;
