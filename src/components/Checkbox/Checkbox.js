import React, { useState, useEffect } from "react";

import "./Checkbox.scss";

import propTypes from "prop-types";

import classnames from "classnames";

function Checkbox({ children, id, className, disibled, onChenge, checked }) {
	const clas = classnames("simple-checkbox-wrapper", className);
  const [privateChecked, setPrivateChecked] = useState(checked);
  function checkedChange (e) {
    let { target } = e
    if (disibled) return
    setPrivateChecked(target.checked);
  }
  useEffect(() => {
    onChenge(privateChecked)
  }, [privateChecked])
	return (
		<div className={clas}>
			<label
				htmlFor={id}
				className={classnames("simple-label", {
					"simple-label-disibled": disibled,
					"simple-label-checked": privateChecked
        })}
			>
				<input type="checkbox" id={id} className="simple-checkbox-input" onClick={checkedChange} />
				<div className="simple-label-text">{children}</div>
			</label>
		</div>
	);
}

Checkbox.defaultProps = {
	disibled: false,
	checked: false,
	onChenge: () => {}
};

Checkbox.propTypes = {
	children: propTypes.node.isRequired, // 显示内容
	id: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired, // 用于关联文本,
	className: propTypes.string, // 容器类名
	disibled: propTypes.bool, // 是否禁用
	onChenge: propTypes.func, // 状态改变时的回调
	checked: propTypes.bool // 是否选中
};

export default Checkbox;
