import React from "react";

import propTypes from "prop-types";

import "./Menu.scss";

function Menu({ width, children, style, openKeys, onOpenChange, ...rest }) {
	function renderChildren(children) {
		return React.Children.map(children, child => {
			let { type } = child
			if (type.name === 'SubMenu') {
				
			}
			return child
		});
	}
	
	return (
		<ul className="simple-menu-wrapper" {...rest} style={{ width, ...style }}>
			{renderChildren(children)}
		</ul>
	);
}

Menu.defaultProps = {
	width: 150,
	openKeys: [],
	onOpenChange: () => {}
};

Menu.propTypes = {
	width: propTypes.oneOfType([propTypes.string, propTypes.number]), // 菜单的宽度
	openKeys: propTypes.array, // 当前展开的 SubMenu 数组
	onOpenChange: propTypes.func // SubMenu 展开/关闭的回调
};

export default Menu;
