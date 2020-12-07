import React from 'react';
import { Field, reduxForm } from 'redux-form';

let Form = props => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={handleSubmit}>
			<label>Type of workout</label>
			<Field name='workout' component='input' type='text' />
			<button type='submit'>Submit</button>
		</form>
	);
};

export default reduxForm({ form: 'workout' })(Form);
