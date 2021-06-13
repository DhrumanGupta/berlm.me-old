﻿import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import {LoginMenu} from "./api-authorization/LoginMenu";

class HeaderNavbar extends Component {
	render() {
		return (
			<nav className={"navbar navbar-expand-md navbar-dark mb-4 shadow-sm"}>
				<div className={"container-fluid"}>
					<Link to="/" className={"navbar-brand mb-0 h1"}>berlm.me</Link>

					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
					        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"/>
					</button>

					<div className="collapse navbar-collapse flex-sm-row-reverse" id="navbarContent">
						<ul className="navbar-nav">

							<li className="nav-item">
								<NavLink className="nav-link" to={'/aboutMe'}>About Me</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link" to={'/blog'}>Blog</NavLink>
							</li>
							<LoginMenu/>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default HeaderNavbar;