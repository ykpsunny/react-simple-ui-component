import React, { useEffect, useState } from "react";

import "./Popover.scss";

import propTypes from "prop-types";

import classnames from "classnames";

function Popover({ content, children, className, position }) {
	const clas = classnames('simple-popover-content', `simple-popover-content-${position}`)
	return (
		<div className="simple-popover-wrapper">
			<div className={clas}>
				<div className="simple-popover-inner">{content}</div>
			</div>
			<div className="simple-popover-children">{children}</div>
		</div>
	);
}

Popover.defaultProps = {
	position: 'topCenter'
};

Popover.propTypes = {
	content: propTypes.node, // 显示内容
	position: propTypes.oneOf(['leftCenter', 'topCenter', 'bottomCenter', 'rightCenter']), // 显示位置
	className: propTypes.string // 容器类名
};

export default Popover;
