import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './AddWorkout.scss';
class AddWorkout extends Component {
	render() {
		return (
			<div className='addworkout-container'>
				<h1>Add Workout</h1>
				<Form>
					<Form.Group>
						<Form.Label>Workout</Form.Label>
						<Form.Control as='select'>
							<option>HIIT</option>
							<option>Outdoor Run</option>
							<option>Jump Rope</option>
							<option>Strength Training</option>
						</Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Calories</Form.Label>
						<Form.Control
							type='number'
							placeholder='Total calories burned'
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Exercise Minutes</Form.Label>
						<Form.Control
							type='number'
							placeholder='Total length of workout (minutes)'
						/>
					</Form.Group>
					<Button variant='primary' type='submit'>
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default AddWorkout;
