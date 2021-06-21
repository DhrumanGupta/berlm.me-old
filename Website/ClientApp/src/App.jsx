import React, {useEffect} from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import Error404 from "./components/Error404";
import {Route, Switch} from 'react-router';
import About from "./components/About";
import Blog from "./components/blog/Blog";
import BlogsByDate from "./components/blog/BlogsByDate";
import BlogsByTag from "./components/blog/BlogsByTag";

function handleResize() {
	const root = document.documentElement;
	root.style.setProperty(`--vh`, (window.innerHeight * 0.01) + 'px');
}

export default function App() {
	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);

		// cleanup this component
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<Layout>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path={'/about'} component={About}/>
				<Route exact path='/resources/blog/:name' component={Blog}/>
				<Route exact path='/resources/blog' component={BlogsByDate}/>
				<Route exact path='/resources/category/:name' component={BlogsByTag}/>
				<Route component={Error404}/>
			</Switch>
		</Layout>
	);
}
