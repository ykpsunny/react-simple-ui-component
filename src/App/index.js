import React from "react";

import "./style.scss";

import '../components/styles/index.scss'

import {
	Switch,
	BrowserRouter as Router,
	Route,
	NavLink,
	Redirect
} from "react-router-dom";

import ButtonDemo from "../components/Button/demo";

import ModalDemo from '../components/Modal/demo'

const routerLink = [
	{
		path: "/button",
		label: "Button"
	},
	{
		path: "/modal",
		label: "Modal"
	}
];

function App({match}) {
	console.log(match);
	return (
		<Router>
			<div className="app">
				<aside>
					{routerLink.map(item => {
						return (
							<NavLink
								className="link-list"
								activeClassName="active"
								key={item.path}
								to={item.path}
							>
								{item.label}
							</NavLink>
						);
					})}
				</aside>
				<main>
					<Switch>
						<Route exact path={`${match.pah}button`} component={ButtonDemo} />
						<Route exact path={`${match.path}modal`} component={ModalDemo} />
						<Redirect from="/" to="/button" />
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
