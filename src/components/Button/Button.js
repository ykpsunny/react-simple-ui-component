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
  ...rest
}) {
  const clas = ['simple-btn', className]
  const classNames = classnames(clas, {
		[`simple-btn-${type}`]: type,
		"simple-btn-shape": shape,
    "simple-btn-block": block
	})
  if (type === 'link') {
    return (
      <a
        {...rest} 
        className={classNames}
      >
				{children}
			</a>
		);
  }
  return (
		<button {...rest} className={classNames} type={htmlType}>
			{
        loading && 
        <i className='btn-loading'>
          <BtnLoading />
        </i>
      }
			{children}
		</button>
	);
}

Button.defaultProps = {
	type: "default",
	disabled: false,
  children: "Default",
  htmlType: 'button'
};

Button.propTypes = {
	type: propTypes.oneOf(["primary", "default", "danger", "link", "dashed"]),
	disabled: propTypes.bool,
	children: propTypes.oneOfType([propTypes.element, propTypes.string]),
	className: propTypes.string,
	href: propTypes.string,
	htmlType: propTypes.string,
	shape: propTypes.bool,
	target: propTypes.string,
	onClick: propTypes.func,
	loading: propTypes.bool
};

export default Button
