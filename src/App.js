import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
	return (
		<div>
			<NavBar />
			<Dashboard />
		</div>
	);
};

export default App;
