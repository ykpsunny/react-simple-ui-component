import React from "react";

import "./Avatar.scss";

import propTypes from "prop-types";

import { AvatarIcon } from "PUBLIC/iconfont/icon";

import classnames from "classnames";

function Avatar({ icon, shape, size, src, alt, name }) {
	function renderAvatar() {
		if (!!src) {
			return (
				<div className="img-box" style={{ width: size, height: size }}>
					<img src={src} alt={alt} />
				</div>
			);
    }
    size -= 10
		return (
			<span
				className="simple-avatar-icon"
				style={{ width: size, height: size }}
			>
				{!!name ? <i className="name">{name.toUpperCase().slice(0, 2)}</i> : <AvatarIcon size={size} />}
			</span>
		);
	}
	return (
		<div className={classnames("simple-avatar-wrapper", shape)}>{renderAvatar()}</div>
	);
}

Avatar.defaultProps = {
	icon: AvatarIcon,
	shape: "circle",
	size: 30
};

Avatar.propTypes = {
	icon: propTypes.node, // 设置头像的图标
	shape: propTypes.oneOf(["circle", "square"]), // 设置头像的形状
	size: propTypes.oneOfType([propTypes.number, propTypes.string]), // 头像大小
	src: propTypes.string, // 图片类头像的资源地址
	alt: propTypes.string, // 当图片加载失败时，显示的文本
	name: propTypes.string // 头像显示 name, 只去首两位
};

export default Avatar;
