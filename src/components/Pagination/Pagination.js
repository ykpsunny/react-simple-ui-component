import React from "react";

import propTypes from "prop-types";

import classnames from "classnames";

import "./Pagination.scss";

function Pagination({ current, pageSize, total }) {
	function renderContent() {
		const pageTotal = Math.ceil(total / pageSize),
			liList = [];
		for (let i = 1; i <= pageTotal; i++) {
			const isActive = (i === current),
					clas = classnames("simple-pagination-item", {
				"simple-pagination-item-active": isActive
			}),
			node = <li key={i} className={clas}>{i}</li>;
			liList.push(node);
		}
		return liList
	}
	return <ul className="simple-pagination-wrapper">{renderContent()}</ul>;
}

Pagination.defaultProps = {
	current: 1,
	pageSize: 10,
	total: 0
};

Pagination.propTypes = {
	current: propTypes.number,
	pageSize: propTypes.number,
	total: propTypes.number.isRequired
};

export default Pagination;
