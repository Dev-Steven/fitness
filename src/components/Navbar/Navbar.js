import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
	return (
		<div>
			<Navbar bg='dark' variant='dark'>
				<Navbar.Brand href='/'>
					<FontAwesomeIcon icon={faRunning} />
					Fitness
				</Navbar.Brand>
				<Nav className='mr-auto'>
					<Nav.Link href='/addworkout'>Add Workout</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
};

export default NavBar;
