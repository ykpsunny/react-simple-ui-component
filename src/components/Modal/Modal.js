import React, { useEffect, useState } from "react";

import "./Modal.scss";

import propTypes from "prop-types";

import { Button } from "../Button";

import { CloseIcon } from "PUBLIC/iconfont/icon";

import classnames from "classnames";

import ReactDOM from "react-dom";

const modalOpenClass = "modal-open-body";

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
								<CloseIcon />
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
	afterClose: propTypes.func, // Modal 完全关闭后的回调
	bodyStyle: propTypes.object, // Modal body 样式
	cancelText: propTypes.string, // 取消按钮文字
	closable: propTypes.bool, // 是否显示右上角的关闭按钮
	confirmLoading: propTypes.bool, // 确定按钮 loading
	footer: propTypes.node, // 底部内容，当不需要默认底部按钮时，可以设为 footer={null}
	keyboard: propTypes.bool, // 是否支持键盘 esc 关闭
	maskStyle: propTypes.object, // 遮罩层样式
	mask: propTypes.bool, // 是否展示遮罩层
	okText: propTypes.string, // 确认按钮文字
	title: propTypes.string, // Modal 标题
	visible: propTypes.bool.isRequired, // Modal 是否可见
	wrapClassName: propTypes.string, // Modal 容器的类名
	onCancel: propTypes.func.isRequired, // 点击遮罩层或右上角叉或取消按钮的回调
	onOk: propTypes.func, // 点击确定回调
	children: propTypes.node.isRequired, // Modal 内容
	maskClosable: propTypes.bool // 点击遮罩层是否允许关闭
};

export default Modal;
