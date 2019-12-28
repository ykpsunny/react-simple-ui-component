import React from 'react'

import './Button.scss'

import propTypes from 'prop-types'

import classnames from 'classnames'

import BtnLoading from 'PUBLIC/svgs/btn-loading.svg'

function Button ({
  type,
  children,
  className,
  htmlType,
  shape,
  block,
  loading,
  onClick,
  ...rest
}) {
  const clas = ['simple-btn', className]
  const classNames = classnames(clas, {
		[`simple-btn-${type}`]: type,
		"simple-btn-shape": shape,
    "simple-btn-block": block,
    [`simple-btn-loading`]: loading
  })
  function handleClick (e) {
    if (loading) {
      return
    } 
    onClick && onClick(e)
  }
  if (type === 'link') {
    return (
			<a {...rest} className={classNames} onClick={handleClick}>
				{children}
			</a>
		);
  }
  return (
		<button
			{...rest}
			className={classNames}
			type={htmlType}
			onClick={handleClick}
		>
			{loading && (
				<i className="btn-loading">
					<BtnLoading />
				</i>
			)}
			{children}
		</button>
	);
}

Button.defaultProps = {
	type: "default",
	disabled: false,
	children: "Default",
	htmlType: "button",
	loading: false,
	shape: false,
	target: 'new',
	loading: false
};

Button.propTypes = {
	type: propTypes.oneOf(["primary", "default", "danger", "link", "dashed"]), // 设置按钮类型，可选值为 primary dashed danger link, 默认为 default
	disabled: propTypes.bool, // 按钮是否禁用
	children: propTypes.oneOfType([propTypes.element, propTypes.string]), // 内容
	className: propTypes.string,
	href: propTypes.string, // 点击跳转的地址(a 元素)
	htmlType: propTypes.string, // 设置 button 原生的 type 值
	shape: propTypes.bool, // 按钮是否圆形
	target: propTypes.string, // 相当于 a 链接的 target 属性，href 存在时生效
	onClick: propTypes.func, // 点击回调
	loading: propTypes.bool // 设置按钮载入状态
};

export default Button
