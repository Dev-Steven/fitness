import React from 'react';
import { connect } from 'react-redux';

import './Plan.scss';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

const Plan = props => {
	return (
		<div className='plan-container'>
			<h6>Workouts</h6>
			<div>
				{props.workouts.map(workout => (
					<div>
						<h4>{workout.name}</h4>
						<p>{workout.calories} calories</p>
						<p>{workout.duration} minutes</p>
					</div>
				))}
			</div>
			{/* <Carousel>
				<Carousel.Item>
					<div className='new_html_code'>
						<Card style={{ width: '18rem' }} bg='dark' text='light'>
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Subtitle className='mb-2 text-muted'>
									Card Subtitle
								</Card.Subtitle>
								<Card.Text>
									Some quick example text to build on the card
									title and make up the bulk of the card's
									content.
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				</Carousel.Item>
			</Carousel> */}
		</div>
	);
};

const mapStateToProps = state => ({
	workouts: state.workouts.workouts,
});

export default connect(mapStateToProps)(Plan);
