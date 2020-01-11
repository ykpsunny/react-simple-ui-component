import React from "react";

import "./MenuItem.scss";

function MenuItem({ children, ...rest }) {
	return (
		<li className="simple-Menu-item-wrapper" {...rest}>
			{children}
		</li>
	);
}

MenuItem.defaultProps = {};

MenuItem.propTypes = {};

export default MenuItem;
