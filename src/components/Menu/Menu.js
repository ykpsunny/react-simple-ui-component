import React, { useEffect, useState } from "react";

import propTypes from "prop-types";

import classnames from "classnames";

function Menu({ content, children, width }) {
	return (
		<ul className="simple-menu-wrapper" style={{width}}>
			{children}
		</ul>
	);
}

Menu.defaultProps = {
	width: 200
};

Menu.propTypes = {};

export default Menu;
