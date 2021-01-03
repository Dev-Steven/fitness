import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';
import './Chart.scss';

const Chart = props => {
	useEffect(() => {
		console.log('props: ', props);
	});
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
						position: 'right',
					},
					maintainAspectRatio: false,
				}}
			/>
		</div>
	);
};
const mapStateToProps = state => ({
	state: state.chart,
});

export default connect(mapStateToProps)(Chart);
