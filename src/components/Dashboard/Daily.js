import React from 'react';
import { connect } from 'react-redux';

const Daily = props => {
	return (
		<div className='daily'>
			<h4>Keep it going Steven you got this!</h4>
			<div className='stats'>
				<p className='calories'>
					Calories <br />
					{props.totals.calories}
				</p>
				<p className='stand'>
					Stand Hours <br /> {props.totals.standHours}
				</p>
				<p className='exercise'>
					Exercise Minutes <br /> {props.totals.exerciseMinutes}
				</p>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	totals: state.workouts.totals,
});

export default connect(mapStateToProps)(Daily);
