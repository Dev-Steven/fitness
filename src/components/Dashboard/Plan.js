import React from 'react';
import { connect } from 'react-redux';

import './Plan.scss';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

const Plan = props => {
	return (
		<div className='plan-container'>
			<h5>Workouts</h5>
			{/* <div>
				{props.workouts.map(workout => (
					<div>
						<h4>{workout.name}</h4>
						<p>{workout.calories} calories</p>
						<p>{workout.duration} minutes</p>
					</div>
				))}
			</div> */}
			<Carousel>
				{props.workouts.map(workout => (
					<Carousel.Item>
						<Card id='card' bg='dark' text='light'>
							<Card.Body>
								<Card.Title>{workout.name}</Card.Title>
								<Card.Text>
									<p>{workout.calories} calories</p>
									<p>{workout.duration} minutes</p>
								</Card.Text>
							</Card.Body>
						</Card>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
};

const mapStateToProps = state => ({
	workouts: state.workouts.workouts,
});

export default connect(mapStateToProps)(Plan);
