import React, { useEffect, useState } from "react";

import "./MenuItem.scss";

import propTypes from "prop-types";

import classnames from "classnames";

function MenuItem({ content, children }) {
	return (
		<li className="simple-Menu-item-wrapper">
			{children}
		</li>
	);
}

MenuItem.defaultProps = {};

MenuItem.propTypes = {};

export default MenuItem;
