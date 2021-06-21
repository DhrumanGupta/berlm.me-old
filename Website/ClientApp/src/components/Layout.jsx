import React, {Component} from 'react';
import NavMenu from "./NavMenu";

class Layout extends Component {
	render() {
		return (
			<div className={"container-fluid min-vh-100 h-auto bg-dark-gradient d-flex flex-column"}>
				<NavMenu/>
				<div className={"container text-light flex-grow-1 d-flex"}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Layout;