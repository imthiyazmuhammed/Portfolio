import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Social from './components/Social';
import Body from './components/Body';

import './styles/globals.css';

function App() {
	return (
		<div className="App bg-gray-900 ">
			<Header />
			<Profile />
			<Social />
			<Body />
		</div>
	);
}

export default App;
