import React from "react";

import propTypes from "prop-types";

import "./SubMenu.scss";

function SubMenu({ title, children, ...rest }) {
	return (
		<li className="simple-sub-menu-wrapper" {...rest}>
			<div className="simple-sub-menu-title">{title}</div>
			<ul className="simple-sub-menu-content">{children}</ul>
		</li>
	);
}

SubMenu.defaultProps = {
	
};

SubMenu.propTypes = {
	title: propTypes.node
};

export default SubMenu;
