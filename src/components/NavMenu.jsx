﻿import React, {Component} from 'react';
import {NavLink, Link} from "react-router-dom";

class NavMenu extends Component {
	render() {
		return (
			<header className={"navbar navbar-expand-sm navbar-dark mb-4 shadow-sm container-fluid"}>
				<Link to="/" className={"navbar-brand mb-0 h1"}>berlm.me</Link>

				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
				        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"/>
				</button>

				<div className="collapse navbar-collapse" id="navbarContent">
					<ul className="navbar-nav">

						<li className="nav-item">
							<NavLink className="nav-link" to={'/about'}>About</NavLink>
						</li>

						<li className="nav-item">
							<NavLink className="nav-link" to={'/blog'}>Blog</NavLink>
						</li>
					</ul>
				</div>
			</header>
		);
	}
}

export default NavMenu;