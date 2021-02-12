import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';

const Chart = props => {
	const { state } = props;
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
						position: 'bottom',
					},
					maintainAspectRatio: false,
				}}
			/>
		</div>
	);
};
const mapStateToProps = state => ({
	state: state.workouts.chart,
});

export default connect(mapStateToProps)(Chart);
