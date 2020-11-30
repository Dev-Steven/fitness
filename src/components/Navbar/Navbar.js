import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
	return (
		<div>
			<Navbar bg='dark' variant='dark'>
				<Link to='/'>
					<Navbar.Brand href='#home'>
						<FontAwesomeIcon icon={faRunning} />
						Fitness
					</Navbar.Brand>
				</Link>
				<Nav className='mr-auto'>
					<Nav.Link>
						<Link to='/addworkout'>Add Workout</Link>
					</Nav.Link>
				</Nav>
			</Navbar>
		</div>
	);
};

export default NavBar;
