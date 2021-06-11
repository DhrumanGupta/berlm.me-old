import React, {Component} from 'react';
import {Link} from "react-router-dom";

class HeaderNavbar extends Component {
	render() {
		return (
			<nav className={"navbar navbar-expand-lg navbar-dark bg-dark mb-4 shadow-sm"}>
				<div className={"container"}>
					<Link to="/" className={"navbar-brand"}>berlm.me</Link>
					
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"/>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							
							<li className="nav-item">
								<Link className="nav-link" to={'/blog'}>Blog</Link>
							</li>
							
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default HeaderNavbar;