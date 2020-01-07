import React, { useEffect, useState } from "react";

import "./Drawer.scss";

import propTypes from "prop-types";

import { CloseIcon } from "PUBLIC/iconfont/icon";

import classnames from "classnames";

import ReactDOM from "react-dom";

function Drawer({
	title,
	visible,
	width,
	wrapperStyle,
	className,
	maskStyle,
	position
}) {
	const clas = classnames(
		"simple-drawer-wrapper",
		`simple-drawer-${position}`,
		className
	);
	function renderTitle() {
		return (
			<div className="simple-drawer-title">
				<div className="simple-title-inner">{title}</div>
				<div className="simple-drawer-colse">
					<CloseIcon />
				</div>
			</div>
		);
	}
	return (
		<div className="simple-drawer-mask" style={maskStyle}>
			<div className={clas} style={{ width, ...wrapperStyle }}>
				{renderTitle()}
			</div>
		</div>
	);
}

Drawer.defaultProps = {
	title: "Title",
	visible: true,
	width: 240,
	wrapperStyle: {},
	maskStyle: {},
	position: "left"
};

Drawer.propTypes = {
	title: propTypes.node, // 显示标题
	visible: propTypes.bool, // 是否显示 drawer
	width: propTypes.oneOfType([propTypes.number, propTypes.string]), // drawer 宽度，默认 240px
	wrapperStyle: propTypes.object, // 容器样式
	className: propTypes.string, // 容器类名
	maskStyle: propTypes.object, // 遮罩层样式
	position: propTypes.oneOf(["left", "right"])
};

export default Drawer;
