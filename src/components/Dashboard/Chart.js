import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Chart.scss';

const state = {
	labels: ['Running', 'HIIT', 'Jump Rope', 'Weight Training', 'Cycling'],
	datasets: [
		{
			label: 'Workouts',
			backgroundColor: [
				'#B21F00',
				'#C9DE00',
				'#2FDE00',
				'#00A6B4',
				'#6800B4',
			],
			hoverBackgroundColor: [
				'#501800',
				'#4B5000',
				'#175000',
				'#003350',
				'#35014F',
			],
			data: [65, 59, 80, 81, 56],
		},
	],
};
const Chart = () => {
	return (
		<div className='chart-container'>
			<Doughnut
				data={state}
				options={{
					title: {
						display: true,
						text: 'Your Workouts',
						fontSize: 20,
					},
					legend: {
						display: true,
						position: 'right',
					},
					maintainAspectRatio: false,
				}}
			/>
		</div>
	);
};
export default Chart;
