import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Header() {
	return (
		<div className="sticky top-0 flex p-3 justify-between bg-opacity-75 bg-gray-900 filter bg-blur-lg">
			<div className="">
				<AllInclusiveIcon className="icon ml-3" />
			</div>
			<div className="space-x-7">
				<SearchIcon className="icon" />
				<MoreVertIcon className="icon" />
			</div>
		</div>
	);
}

export default Header;
