import React from "react";

import propTypes from "prop-types";

import "./Menu.scss";

function Menu({ content, width, children, style, ...rest }) {
	function renderChildren(children, paddingLeft = 16) {
		return React.Children.map(children, Child => {
			let style = {};
			if (Child.type.name === "MenuItem") {
				style = { paddingLeft: paddingLeft };
				return React.cloneElement(Child, { style });
			} else if (Child.type.name === "SubMenu") {
				return (
					<React.Fragment>
						{Child}
						{renderChildren(Child.props.children, paddingLeft)}
					</React.Fragment>
				);
			}
			return Child;
		});
	}
	return (
		<ul className="simple-menu-wrapper" {...rest} style={{ width, ...style }}>
			{renderChildren(children)}
		</ul>
	);
}

Menu.defaultProps = {
	width: 200
};

Menu.propTypes = {
	width: propTypes.oneOfType([propTypes.string, propTypes.number])
};

export default Menu;
