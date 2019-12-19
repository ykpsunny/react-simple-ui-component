import React from 'react'

import './Button-Group.scss'

import classnames from 'classnames'

import propTypes from 'prop-types'

function ButtonGroup ({ className, children, ...rest }) {
  const clas = classnames("simple-btn-group", className)
  return (
    <div className={clas} {...rest}>
      {children}
    </div>
  )
}

ButtonGroup.propTypes = {
	className: propTypes.string
};

export default ButtonGroup
