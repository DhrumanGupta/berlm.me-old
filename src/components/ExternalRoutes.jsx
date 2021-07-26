import React, {Fragment} from 'react';
import {Route} from "react-router-dom";
import routes from '../data/ExternalRoutes.json';

function ExternalRoutes() {
	console.log(routes)
	return (
		<Fragment>
			{
				routes.map(route =>
					{
						console.log(route)
						return <Route key={route.route} exact path={`/${route.route}`} component={() => window.location = route.link}/>
					}
				)
			}
		</Fragment>
	);
}

export default ExternalRoutes;