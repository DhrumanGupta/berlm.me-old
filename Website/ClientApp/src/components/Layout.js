import React, {Component} from 'react';
import HeaderNavbar from "./HeaderNavbar";

class Layout extends Component {
	render() {
		return (
			<div className={"container-fluid h-100 bg-dark d-flex flex-column"}>
				<HeaderNavbar/>
				<div className={"container text-light h-100"}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Layout;