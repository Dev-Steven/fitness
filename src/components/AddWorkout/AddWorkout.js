import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWorkout } from '../../redux/actions';

import Form from './Form';
import './AddWorkout.scss';
class AddWorkout extends Component {
	submit = values => {
		this.props.addWorkout(values);
	};

	render() {
		return <Form onSubmit={this.submit} />;
	}
}
export default connect(null, { addWorkout })(AddWorkout);
