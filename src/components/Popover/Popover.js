import React, { useEffect, useState, Fragment, useRef } from "react";

import "./Popover.scss";

import propTypes from "prop-types";

import classnames from "classnames";

import ReactDOM from "react-dom";

function Popover({
	content,
	children,
	className,
	position,
	visible: defaultVisible,
	trigger
}) {
	const [visible, setVisible] = useState(defaultVisible);
	const clas = classnames(
		"simple-popover-wrapper",
		`simple-popover-wrapper-${position}`
	);

	const childrenRef = useRef();
	const contentRef = useRef();

	let triggerHandle = {}

	switch (trigger) {
		case "click":
			triggerHandle.onClick = clickHandle;
			break;
		case "hover":
			triggerHandle = {
				onMouseEnter: mouseEnterHandle,
				onMouseLeave: mouseLeaveHandle
			};
			break;
		case "contextMenu":
			triggerHandle.onContextMenu = contextMenuHandle;
			break;
		default:;
	}

	function mouseEnterHandle() {
		show()
	}

	function mouseLeaveHandle() {
		setTimer()
	}

	function setTimer () {
		clearTimeout(Popover.timer);
		Popover.timer = setTimeout(() => {
			hide();
		}, 0.1);
	}

	function contextMenuHandle(e) {
		e.stopPropagation()
		e.preventDefault();
		show()
	}

	useEffect(() => {
		setPosition();
	});

	function setPosition() {
		if (!visible) {
			return;
		}
		let childrenNode = childrenRef.current,
			contentNode = contentRef.current,
			childrenNodeOffset = childrenNode.getBoundingClientRect(),
			contentNodeOffset = contentNode.getBoundingClientRect(),
			transformOrigin = {
				left: "50%",
				top: "50%"
			};
		if (position.includes("top")) {
			transformOrigin.top = `${childrenNodeOffset.top -
				contentNodeOffset.height -
				5}px`;
			transformOrigin.left = `${childrenNodeOffset.left -
				contentNodeOffset.width / 2 +
				childrenNodeOffset.width / 2}px`;
		} else if (position.includes("left")) {
			transformOrigin.top = `${childrenNodeOffset.top -
				childrenNodeOffset.height / 2}px`;
			transformOrigin.left = `${childrenNodeOffset.left -
				contentNodeOffset.width -
				5}px`;
		} else if (position.includes("right")) {
			transformOrigin.top = `${childrenNodeOffset.top -
				contentNodeOffset.height / 2}px`;
			transformOrigin.left = `${childrenNodeOffset.left +
				childrenNodeOffset.width +
				15}px`;
		} else if (position.includes("bottom")) {
			transformOrigin.top = `${childrenNodeOffset.top +
				contentNodeOffset.height -
				15}px`;
			transformOrigin.left = `${childrenNodeOffset.left -
				contentNodeOffset.width / 2 +
				childrenNodeOffset.width / 2}px`;
		}
		contentNode.style.left = transformOrigin.left;
		contentNode.style.top = transformOrigin.top;
	}

	function renderContent() {
		return ReactDOM.createPortal(
			<div className={clas} ref={contentRef} onClick={e => e.stopPropagation()}>
				<div
					className={classnames("simple-popover-content", className)}
				>
					{content}
				</div>
				<div className="simple-popover-arrow"></div>
			</div>,
			document.body
		);
	}

	function clickHandle(e) {
		e.stopPropagation();
		show();
	}

	function show() {
		setVisible(true);
	}

	function hide() {
		setVisible(false);
	}


	useEffect(() => {
		if (trigger === "click" || trigger === 'contextMenu') {
			window.addEventListener("click", hide, false);
		}
		return () => {
			window.removeEventListener("click", hide, false);
		};
	});

	return (
		<Fragment>
			{visible && renderContent()}
			<div
				className="simple-popover-children"
				ref={childrenRef}
				{...triggerHandle}
			>
				{children}
			</div>
		</Fragment>
	);
}

Popover.defaultProps = {
	position: "bottomCenter",
	visible: false,
	trigger: "hover"
};

Popover.propTypes = {
	content: propTypes.node, // 显示内容
	position: propTypes.oneOf([
		"leftCenter",
		"topCenter",
		"bottomCenter",
		"rightCenter"
	]), // 显示位置
	className: propTypes.string, // 内容类名
	trigger: propTypes.oneOf(["hover", "click", "contextMenu"]), // 触发事件
	visible: propTypes.bool // 是否显示气泡
};

export default Popover;
