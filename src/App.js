import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

import NavBar from './components/navBar';
import Dashboard from './components/Dashboard';

const App = () => {
	return (
		<div>
			<NavBar />
			<Dashboard />
		</div>
	);
};

export default App;
