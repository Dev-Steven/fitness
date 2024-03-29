import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
	return (
		<div>
			<Navbar bg='dark' variant='dark'>
				<Link className='link brand' to='/'>
					<FontAwesomeIcon icon={faRunning} />
					Fitness
				</Link>
				<Nav className='navbar-nav ml-auto' variant='light'>
					<Link className='link' to='/createworkout'>
						Workout Planner
					</Link>
					<Link className='link' to='/addworkout'>
						Add Workout
					</Link>
				</Nav>
			</Navbar>
		</div>
	);
};

export default NavBar;
