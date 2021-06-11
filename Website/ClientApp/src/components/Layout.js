import React, {Component} from 'react';
import HeaderNavbar from "./HeaderNavbar";

class Layout extends Component {
	render() {
		return (
			<div>
				<HeaderNavbar/>
				<div className={"container"}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Layout;