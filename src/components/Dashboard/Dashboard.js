import './Dashboard.scss';
import { connect } from 'react-redux';

import Chart from './Chart';
import Plan from './Plan';

const Dashboard = props => {
	return (
		<div className='dashboard-container'>
			<div className='daily'>
				<h4>Keep it going Steven you got this!</h4>
				<div className='stats'>
					<p className='calories'>Calories</p>
					<p className='stand'>Stand Hours </p>
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

const mapStateToProps = state => ({
	workouts: state.workouts.workouts,
	totalCals: state.workouts.totalCal,
});

export default connect(mapStateToProps)(Dashboard);
