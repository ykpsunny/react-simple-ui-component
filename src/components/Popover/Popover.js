import React, { useEffect, useState, Fragment } from "react";

import "./Popover.scss";

import propTypes from "prop-types";

import classnames from "classnames";

function Popover({ content, children, className, position }) {
	const clas = classnames(
		"simple-popover-wrapper",
		`simple-popover-wrapper-${position}`
	);
	return (
		<Fragment>
			<div className={clas}>
				<div className="simple-popover-content">{content}</div>
				<div className="simple-popover-arrow"></div>
			</div>
			<div className="simple-popover-children">{children}</div>
		</Fragment>
	);
}

Popover.defaultProps = {
	position: "topCenter"
};

Popover.propTypes = {
	content: propTypes.node, // 显示内容
	position: propTypes.oneOf([
		"leftCenter",
		"topCenter",
		"bottomCenter",
		"rightCenter"
	]), // 显示位置
	className: propTypes.string, // 容器类名
	trigger: propTypes.oneOf(['hover', 'click', 'contextMenu'])
};

export default Popover;
