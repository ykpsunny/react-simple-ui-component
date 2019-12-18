import React from 'react'

import './Button-Group.scss'

function ButtonGroup ({ children, ...rest }) {
  return (
    <div className='simple-btn-group' {...rest}>
      {children}
    </div>
  )
}

export default ButtonGroup
