import React, {Component} from 'react';
import {Route} from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import BlogList from "./components/blog/BlogList";
import {Redirect} from 'react-router-dom';

export default class App extends Component {
	static displayName = App.name;

	render() {
		return (
				<Layout>
					<Route exact path='/' component={Home}/>
					<Route exact path='/blog' component={BlogList}/>
					<Route render={() => <Redirect to={{pathname: "/"}}/>}/>
				</Layout>
		);
	}
}
