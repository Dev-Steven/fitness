import React from 'react';
import './Dashboard.scss';

import Chart from './Chart';

const Dashboard = () => {
	return (
		<div className='dashboard-container'>
			<div className='daily'>
				<h4>
					Keep it going Steven you got this! Take a look at your
					totals for today!
				</h4>
				<div>
					<ul>
						<li>Calories</li>
						<li>Stand Hours</li>
						<li>Exercise Minutes</li>
					</ul>
				</div>
			</div>
			<Chart />
		</div>
	);
};

export default Dashboard;
