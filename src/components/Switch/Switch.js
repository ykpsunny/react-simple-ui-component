import React from "react";

import PropTypes from "prop-types";

import classnames from "classnames";

import "./Switch.scss";

const Switch = ({
	checked,
	disabled,
	size,
	id,
	className,
	children,
	onChange,
	...rest
}) => (
	<div className={classnames("simple-switch-wrapper", className)}>
		<div
			className={classnames(
				"simple-input-container",
				`simple-input-container-${size}`,
				{
					checked,
					disabled
				}
			)}
		>
			<input
				type="checkbox"
				id={id}
				checked={checked}
				className={classnames("simple-input", {
					disabled
				})}
				disabled={disabled}
				onChange={onChange}
				{...rest}
			/>
			<div
				className={classnames("simple-switcher", `simple-switcher-${size}`, {
					checked
				})}
			/>
		</div>
		{children && (
			<label
				htmlFor={id}
				className={classnames("simple-label", {
					actionable: Boolean(id)
				})}
			>
				{children}
			</label>
		)}
	</div>
);

Switch.defaultProps = {
	checked: false,
	disabled: false,
  size: "small",
  onChange: () => {}
};

Switch.propTypes = {
	checked: PropTypes.bool,
	disabled: PropTypes.bool,
	size: PropTypes.oneOf(["small", "large"]),
	id: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
	onChange: PropTypes.func.isRequired
};

export default Switch;
