import React from 'react';
import {Link} from "react-router-dom";

function Error404() {
	return (
		<div className={"d-flex flex-grow-1 flex-column align-items-center justify-content-center container-sm text-center"}>
			<p className={"display-4"}>
				The page you are looking for cannot be found.
			</p>
			<p className={"display-7 text-secondary"}>
				Go back to <Link to={'/'} className={"text-secondary"}>Home</Link>
				<br/>
				(404 Not Found)
			</p>
		</div>
	);
}

export default Error404;