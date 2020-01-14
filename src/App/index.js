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

import CheckboxDemo from '../components/Checkbox/demo'

import RadioDemo from '../components/Radio/demo'

import PopoverDemo from '../components/Popover/demo'

import DrawerDemo from "../components/Drawer/demo";

import SwitchDemo from "../components/Switch/demo";

import DropdownDemo from "../components/Dropdown/demo";

import MenuDemo from "../components/Menu/demo";

import TabsDemo from "../components/Tabs/demo";

import AvatarDemo from "../components/Avatar/demo";

import MessageDemo from "../components/Message/demo";

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
		path: "/table",
		label: "Table"
	},
	{
		path: "/pagination",
		label: "Pagination"
	},
	{
		path: "/checkbox",
		label: "checkbox"
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
					<MessageDemo />
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
						<Route
							exact
							path={`/checkbox`}
							render={() => <CheckboxDemo></CheckboxDemo>}
							component={CheckboxDemo}
						/>
						<Redirect from="/" to="/pagination" />
					</Switch> */}
				</main>
			</div>
		</Router>
	);
}

export default App;
