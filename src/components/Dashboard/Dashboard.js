import React from 'react';
import './Dashboard.scss';

import Chart from './Chart';
import Plan from './Plan';

const Dashboard = () => {
	return (
		<div className='dashboard-container'>
			<div className='daily'>
				<h4>
					Keep it going Steven you got this! Take a look at your
					totals for today!
				</h4>
				<ul>
					<li>Calories</li>
					<li>Stand Hours</li>
					<li>Exercise Minutes</li>
				</ul>
			</div>
			<div className='workouts'>
				<Chart />
				<Plan />
			</div>
		</div>
	);
};

export default Dashboard;
