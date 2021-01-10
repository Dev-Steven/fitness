import React from 'react';
import './Plan.scss';

const Plan = () => {
	return (
		<div className='plan-container'>
			<h6>Planned Workouts</h6>
			<ul>
				<input type='checkbox' label='Run' /> Run <br />
				<input type='checkbox' label='Jump Rope' /> Jump Rope <br />
				<input type='checkbox' label='Chest Day' /> Chest Day <br />
				<input type='checkbox' label='Back Day' /> Back Day
			</ul>
		</div>
	);
};

export default Plan;
