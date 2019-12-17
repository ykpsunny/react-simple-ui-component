import React from 'react'

import { Button } from '../components'

import './style.scss'

function App () {
  return (
    <div className='app-btn'>
      <Button />
      <Button type='primary'>button</Button>
      <Button type='danger' disabled={true}><span>disabled</span></Button>
    </div>
  )
}

export default App
