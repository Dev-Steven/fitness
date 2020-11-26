import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
	return (
		<div>
			<Navbar bg='dark' variant='dark'>
				<Navbar.Brand href='#home'>
					<FontAwesomeIcon icon={faRunning} />
					Fitness
				</Navbar.Brand>
			</Navbar>
		</div>
	);
};

export default NavBar;
