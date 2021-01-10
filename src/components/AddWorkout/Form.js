import React from 'react';
import { Field, reduxForm } from 'redux-form';

let Form = props => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={handleSubmit}>
			<label>Name</label>
			<Field name='name' component='input' type='text' />
			<label>Total Calories</label>
			<Field name='calories' component='input' type='number' />
			<label>Duration</label>
			<Field name='duration' component='input' type='number' />
			<button type='submit'>Submit</button>
		</form>
	);
};

export default reduxForm({ form: 'workout' })(Form);
