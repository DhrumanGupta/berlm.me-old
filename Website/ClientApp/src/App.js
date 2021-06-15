import React, {Component} from 'react';
import {Route, Switch} from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import BlogList from "./components/blog/BlogList";
import Error404 from "./components/Error404";

export default class App extends Component {
	static displayName = App.name;

	render() {
		return (
			<Layout>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route exact path='/blog/t' component={BlogList}/>
					<Route component={Error404}/>
				</Switch>
			</Layout>
		);
	}
}
