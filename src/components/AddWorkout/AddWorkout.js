import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import Form from './Form';
import './AddWorkout.scss';
class AddWorkout extends Component {
	submit = values => {
		console.log(values);
	};

	render() {
		return <Form onSubmit={this.submit} />;
	}
}
export default AddWorkout;
