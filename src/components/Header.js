import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

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
