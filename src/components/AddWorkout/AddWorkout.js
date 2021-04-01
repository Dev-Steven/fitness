import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWorkout } from '../../redux/actions';
import { withRouter } from 'react-router-dom';

import Form from './Form';
import './AddWorkout.scss';
class AddWorkout extends Component {
	submit = values => {
		this.props.addWorkout(values);
		this.props.history.push('/');
	};

	render() {
		return (
			<div className='form-container'>
				<div className='form'>
					<h3 className='header'>Add a Workout</h3>
					<Form onSubmit={this.submit} />
				</div>
			</div>
		);
	}
}
export default connect(null, { addWorkout })(withRouter(AddWorkout));
