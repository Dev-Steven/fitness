import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

let WorkoutForm = props => {
	const { handleSubmit } = props;
	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group>
				<Form.Label className='label'>Name</Form.Label>
				<Field className='input' name='name' component='input' />
			</Form.Group>
			<Form.Group>
				<Form.Label className='label'>Total Calories</Form.Label>
				<Field
					className='input'
					name='calories'
					component='input'
					type='number'
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label className='label'>Duration</Form.Label>
				<Field
					className='input'
					name='duration'
					component='input'
					type='number'
				/>
			</Form.Group>
			<Row className='justify-content-md-center'>
				<Button type='submit'>Submit</Button>
			</Row>
		</Form>
	);
};

export default reduxForm({ form: 'workout' })(WorkoutForm);
