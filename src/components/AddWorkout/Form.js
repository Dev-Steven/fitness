import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

let WorkoutForm = props => {
	const { handleSubmit } = props;
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Label>Name</Form.Label>
				<Field name='name' component='input' type='text' />
			</Form.Group>
			<Form.Group>
				<Form.Label>Total Calories</Form.Label>
				<Field name='calories' component='input' type='number' />
			</Form.Group>
			<Form.Group>
				<Form.Label>Duration</Form.Label>
				<Field name='duration' component='input' type='number' />
			</Form.Group>
			<Button type='submit'>Submit</Button>
		</Form>
	);
};

export default reduxForm({ form: 'workout' })(WorkoutForm);
