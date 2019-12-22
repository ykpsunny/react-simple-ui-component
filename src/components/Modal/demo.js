import React, { useState } from 'react'

import Modal from './'

import { Button } from '../Button';

function ModalDemo () {
  const [show, setShow] = useState(false)
  function onCancel () {
    console.log('cancel')
    setShow(false)
  }
  function showHandle () {
    setShow(true)
  }
  function onOk () {
    console.log('ok')
    setShow(false)
  }
  return (
    <div>
      <Modal onCancel={onCancel} visible={show} onOk={onOk}>
        this is modalsimple-simple-simple- simple- simple- simple- simple- simple-
        simple- simple- simple- simple- simple- simple- simple- simple- simple-
        simple- simple- simple- simple- simple- simple- simple- simple- simple-
        simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-
        simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-
      </Modal>
		<Button onClick={showHandle}>alert</Button>
    </div>
	);
}

export default ModalDemo
