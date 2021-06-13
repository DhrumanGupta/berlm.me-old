import React, {Component} from 'react';
import HeaderNavbar from "./HeaderNavbar";

class Layout extends Component {
	render() {
		return (
			<div className={"container-fluid h-100 bg-dark"}>
				<HeaderNavbar/>
				<div className={"container text-light"}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Layout;