import React from 'react'

import './Button.scss'

import propTypes from 'prop-types'

import classnames from 'classnames'

function Button ({
  type,
  children,
  ...rest
}) {
  const classNames = {
    'simple-btn': true,
    [`simple-btn-${type}`]: type
  }
  return (
    <button 
      {...rest} 
      className={classnames(classNames)}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'default',
  disabled: false,
  children: 'Button'
}

Button.propTypes = {
  type: propTypes.oneOf(['primary', 'default', 'danger', 'link']),
  disabled: propTypes.bool,
  children: propTypes.oneOfType([propTypes.element, propTypes.string])
}

export default Button
