import React, { useEffect, useState } from "react";

import "./Dropdown.scss";

import propTypes from "prop-types";

import classnames from "classnames";

function Dropdown({
	content,
	children,
	className,
	trigger,
	defaultVisible,
	visibleChange,
	disibled
}) {
	const [visible, setVisible] = useState(defaultVisible);
	let triggerHandle = {},
		contentHandle = {};

	useEffect(() => {
		if (trigger === "click" || trigger === "contextMenu") {
			window.addEventListener("click", hide, false);
		}
		return () => {
			window.removeEventListener("click", hide, false);
		};
	});

	useEffect(() => {
		visibleChange && visibleChange(visible);
	}, [visible]);

	switch (trigger) {
		case "click":
			triggerHandle.onClick = clickHandle;
			break;
		case "hover":
			triggerHandle = {
				onMouseEnter: mouseEnterHandle,
				onMouseLeave: mouseLeaveHandle
			};
			contentHandle = {
				onMouseEnter: () => {
					clearTimeout(Dropdown.timer);
				},
				onMouseLeave: () => {
					setTimer();
				}
			};
			break;
		case "contextMenu":
			triggerHandle.onContextMenu = contextMenuHandle;
			break;
		default:
	}

	function clickHandle(e) {
		e.stopPropagation();
		setVisible(!visible);
	}

	function mouseEnterHandle() {
		clearTimeout(Dropdown.timer);
		show();
	}

	function mouseLeaveHandle() {
		setTimer();
	}

	function setTimer() {
		clearTimeout(Dropdown.timer);
		Dropdown.timer = setTimeout(() => {
			hide();
		}, 0.1);
	}

	function contextMenuHandle(e) {
		e.preventDefault();
		show();
	}

	function show() {
		setVisible(true);
	}

	function hide() {
		setVisible(false);
	}

	return (
		<div className={classnames("simple-dropdown-wrapper", className)}>
			<div
				className={classnames("simple-dropdown-box", { disibled })}
				{...triggerHandle}
			>
				{children}
			</div>
			{visible && (
				<div className="simple-dropdown-content" {...contentHandle}>
					{content}
				</div>
			)}
		</div>
	);
}

Dropdown.defaultProps = {
	defaultVisible: false,
	trigger: "click",
	disibled: false
};

Dropdown.propTypes = {
	trigger: propTypes.oneOf(["hover", "click", "contextMenu"]), // 触发的方式
	defaultVisible: propTypes.bool, // 默认下拉菜单是否可见
	visibleChange: propTypes.func, // 菜单显示状态改变时调用，参数为 visible
	content: propTypes.element, // 下拉菜单
	className: propTypes.string, // 容器类名
	disibled: propTypes.bool // 是否禁用下拉菜单 
};

export default Dropdown;
