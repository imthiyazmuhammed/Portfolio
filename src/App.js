import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Social from './components/Social';
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from './components/Contact';

import './styles/globals.css';

function App() {
	return (
		<div className="App bg-gray-900 relative ">
			<Header />
			<Profile />
			<Social />
			<Body />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
