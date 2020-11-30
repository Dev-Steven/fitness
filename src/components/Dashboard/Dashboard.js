import React from 'react';
import './Dashboard.scss';

import Chart from './Chart';
import Plan from './Plan';

const Dashboard = () => {
	return (
		<div className='dashboard-container'>
			<div className='daily'>
				<h4>Keep it going Steven you got this!</h4>
				<div className='stats'>
					<p>Calories</p>
					<p>Stand Hours</p>
					<p>Exercise Minutes</p>
				</div>
			</div>
			<div className='workouts'>
				<Chart />
				<Plan />
			</div>
		</div>
	);
};

export default Dashboard;
