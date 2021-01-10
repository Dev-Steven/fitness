import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch } from 'react-router-dom';

import NavBar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import AddWorkout from './components/AddWorkout/AddWorkout';

const App = () => {
	return (
		<div>
			<Router>
				<NavBar />
				<Switch>
					<Dashboard path='/' exact />
					<AddWorkout path='/addworkout' exact />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
