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
					<p className='calories'>Calories</p>
					<p className='stand'>Stand Hours</p>
					<p className='exercise'>Exercise Minutes</p>
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
