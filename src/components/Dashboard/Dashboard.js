import React from 'react';

import Daily from './Daily';
import Chart from './Chart';
import Plan from './Plan';

import './Dashboard.scss';

const Dashboard = () => {
	return (
		<div className='dashboard-container'>
			<Daily />
			<div className='workouts'>
				<Chart />
				<Plan />
			</div>
		</div>
	);
};

export default Dashboard;
