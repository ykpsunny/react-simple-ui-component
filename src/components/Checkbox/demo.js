import React, { useState } from 'react'

import Checkbox from '.'

function ModalDemo () {
  return (
		<div>
			<Checkbox id="name">name</Checkbox>
      <br />
			<Checkbox id="age" disibled={true}>age</Checkbox>
		</div>
	);
}

export default ModalDemo
