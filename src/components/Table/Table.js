import React, { useEffect, useState, useMemo } from "react";

import "./Table.scss";

import propTypes from "prop-types";

import classnames from "classnames";

function Table({
	titleColumns,
	dataSources,
	bordered,
	rowKey,
	align,
	className,
	fixedTitle
}) {
	const clas = classnames(
		"simple-table-container",
		`simple-${align}`,
		{
			"simple-table-border": bordered
		},
		className
	);
	function renderTitle() {
		const titleNode = titleColumns.map(item => {
			const { title, className } = item,
				clas = classnames("simple-column-title", className);
			return (
				<th className={clas}>
					<span className='text'>{title}</span>
				</th>
			);
		});
		return titleNode;
	}
	function renderRow() {
		return dataSources.map(item => {
			const { className } = item;
			const clas = classnames("simple-row", className);
			return (
				<tr className={clas}>
					{titleColumns.map(j => {
						const { dataIndex, className } = j,
							clas = classnames("simple-column", className);
						return (
							<td key={dataIndex} className={clas}>
								<span className='text'>{item[dataIndex]}</span>
							</td>
						);
					})}
				</tr>
			);
		});
	}
	return (
		<div className="simple-table-wrapper">
			<table className={clas}>
				<thead className={classnames({ "fixed-title": fixedTitle })}>
					<tr className="simple-row">{renderTitle()}</tr>
				</thead>
				<tbody>{renderRow()}</tbody>
			</table>
		</div>
	);
}

Table.defaultProps = {
	rowKey: "key",
	bordered: false,
	align: "left",
	fixedTitle: false,
};

Table.propTypes = {
	titleColumns: propTypes.arrayOf(propTypes.object),
	dataSources: propTypes.arrayOf(propTypes.object),
	rowKey: propTypes.string,
	bordered: propTypes.bool,
	align: propTypes.oneOf(["left", "center", "right"]),
	fixedTitle: propTypes.bool
};

export default Table;
