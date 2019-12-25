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

import ModalDemo from '../components/Modal/demo';

import TableDemo from '../components/Table/demo';

import PaginationDemo from '../components/Pagination/demo'

const routerLink = [
	{
		path: "/button",
		label: "Button"
	},
	{
		path: "/modal",
		label: "Modal"
	},
	{
		path: '/table',
		label: 'Table'
	},
	{
		path: '/pagination',
		label: 'Pagination'
	}
];

function App() {
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
						<Route exact path={`/button`} component={ButtonDemo} />
						<Route exact path={`/modal`} component={ModalDemo} />
						<Route exact path={`/table`} component={TableDemo} />
						<Route exact path={`/pagination`} component={PaginationDemo} />
						{/* <Redirect from="/" to="/table" /> */}
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;
