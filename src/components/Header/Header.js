import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
	return (
		<div className="header d-flex">
			<h3>
				<a href="/">Star DB</a>
			</h3>
			<ul className="d-flex">
				<li>
					<Link to="/persons/">Persons</Link>
				</li>
				<li>
					<Link to="/planets/">Planets</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/secret">Secret</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
