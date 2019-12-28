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

import CheckBox from '../components/Checkbox/demo'

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
					{/* {routerLink.map(item => {
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
					})} */}
				</aside>
				<main>
					<CheckBox />
					{/* <Switch>
						<Route
							exact
							path={`/button`}
							render={() => <ButtonDemo></ButtonDemo>}
						/>
						<Route
							exact
							path={`/modal`}
							render={() => <ModalDemo></ModalDemo>}
							component={ModalDemo}
						/>
						<Route
							exact
							path={`/table`}
							render={() => <TableDemo></TableDemo>}
							component={TableDemo}
						/>
						<Route
							exact
							path={`/pagination`}
							render={() => <PaginationDemo></PaginationDemo>}
							component={PaginationDemo}
						/>
						<Redirect from="/" to="/pagination" />
					</Switch> */}
				</main>
			</div>
		</Router>
	);
}

export default App;
