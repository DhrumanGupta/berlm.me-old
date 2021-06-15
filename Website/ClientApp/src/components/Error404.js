import React from 'react';
import {Link} from "react-router-dom";

function Error404() {
	return (
		<div className={"d-flex h-100 flex-column align-items-center justify-content-center container-sm"}>
			<p className={"display-3 text-center"}>
				The page you are looking for cannot be found.
			</p>
			<br/>
			<p className={"display-7 text-secondary"}>
				Go back to <Link to={'/'} className={"text-secondary"}>Home</Link>
			</p>
		</div>
	);
}

export default Error404;