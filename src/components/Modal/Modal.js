import React from 'react'

import './Modal.scss'

import { Button } from '../Button'

import { CloseIcon } from 'PUBLIC/iconfont/icon'

function Modal () {
  return (
		<div className="simple-mask-wrapper">
			<div className="simple-container">
				<div className="simple-modal-header">
					<h2 className="simple-modal-title">Title</h2>
					<div className="simple-close-wrapper">
						{CloseIcon}
					</div>
				</div>
				<div className="simple-modal-content">
					this is modalsimple-simple-simple- simple- simple- simple- simple-
					simple- simple- simple- simple- simple- simple- simple- simple-
					simple- simple- simple- simple- simple- simple- simple- simple-
					simple- simple- simple-
					simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-simple-
				</div>
				<div className="simple-modal-footer">
					<Button className="simple-cancel">Cancel</Button>
					<Button type="primary" className="simple-submit">
						Save
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Modal