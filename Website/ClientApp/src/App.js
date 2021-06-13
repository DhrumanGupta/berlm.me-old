import React, {Component} from 'react';
import {Route} from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import BlogList from "./components/BlogList";
import {Redirect} from 'react-router-dom';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import {ApplicationPaths} from './components/api-authorization/ApiAuthorizationConstants';

export default class App extends Component {
	static displayName = App.name;

	render() {
		return (
				<Layout>
					<Route exact path='/' component={Home}/>
					<Route path='/blog' component={BlogList}/>
					<Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes}/>
					<Route render={() => <Redirect to={{pathname: "/"}}/>}/>
				</Layout>
		);
	}
}
