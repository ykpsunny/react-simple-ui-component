import React, { useEffect, useState } from "react";

import "./Modal.scss";

import propTypes from "prop-types";

import { Button } from "../Button";

import { CloseIcon } from "PUBLIC/iconfont/icon";

import classnames from "classnames";

const modalOpenClass = "modal-open-body";

import ReactDOM from "react-dom";

const toggleBodyClass = visible => {
	const body = document.body;
	if (visible) {
		body.classList.add(modalOpenClass);
	} else {
		body.classList.remove(modalOpenClass);
	}
};

function Modal({
	afterClose,
	bodyStyle,
	cancelText,
	okText,
	title,
	closable,
	confirmLoading,
	footer,
	keyboard,
	mask,
	maskStyle,
	visible,
	wrapClassName,
	onCancel,
	onOk,
	children,
	maskClosable,
	...rest
}) {
	const [modalVisible, setModalVisible] = useState(visible);
	const clas = classnames("simple-mask-wrapper", wrapClassName, {
		"simple-mask-hide": !mask
	});

	useEffect(() => {
		toggleBodyClass(visible);
		setModalVisible(visible);
	}, [visible]);

	useEffect(() => {
		window.addEventListener("keydown", keyDownHandle, false);
		return () => {
			window.addEventListener("keydown", keyDownHandle, false);
		};
	});

	useEffect(() => {
		return () => {
			afterClose && afterClose();
		};
	});

	function close(e) {
		setModalVisible(false);
		onCancel && onCancel(e);
	}

	function okClick(e) {
		setModalVisible(false);
		onOk && onOk(e);
	}

	function keyDownHandle(e) {
		if (!keyboard) {
			return;
		}
		if (e.which === 27 || e.key === "Escape" || e.keyCode === 27) {
			close(e);
		}
	}

	function renderFooter() {
		return (
			footer || (
				<div className="simple-modal-footer">
					<Button className="simple-cancel" onClick={close}>
						{cancelText}
					</Button>
					<Button
						type="primary"
						className="simple-submit"
						loading={confirmLoading}
						onClick={okClick}
					>
						{okText}
					</Button>
				</div>
			)
		);
	}

	function cancelBubble(e) {
		e.stopPropagation();
	}

	function renderModal() {
		return (
			<div
				className={clas}
				style={maskStyle}
				onClick={maskClosable ? close : () => {}}
				{...rest}
			>
				<div
					className="simple-container"
					style={bodyStyle}
					onClick={cancelBubble}
				>
					<div className="simple-modal-header">
						<h2 className="simple-modal-title">{title}</h2>
						{closable && (
							<div className="simple-close-wrapper" onClick={onCancel}>
								{CloseIcon}
							</div>
						)}
					</div>
					<div className="simple-modal-content">{children}</div>
					{renderFooter()}
				</div>
			</div>
		);
	}

	return modalVisible
		? ReactDOM.createPortal(<div>{renderModal()}</div>, document.body)
		: null;
}

Modal.defaultProps = {
	cancelText: "Cancel",
	okText: "Ok",
	title: "Default Title",
	closable: true,
	confirmLoading: false,
	keyboard: true,
	mask: true,
	maskClosable: true,
	visible: false
};

Modal.propTypes = {
	afterClose: propTypes.func,
	bodyStyle: propTypes.object,
	cancelText: propTypes.string,
	closable: propTypes.bool,
	confirmLoading: propTypes.bool,
	footer: propTypes.node,
	keyboard: propTypes.bool,
	maskStyle: propTypes.object,
	mask: propTypes.bool,
	okText: propTypes.string,
	title: propTypes.string,
	visible: propTypes.bool.isRequired,
	wrapClassName: propTypes.string,
	onCancel: propTypes.func.isRequired,
	onOk: propTypes.func,
	children: propTypes.node.isRequired,
	maskClosable: propTypes.bool
};

export default Modal;
