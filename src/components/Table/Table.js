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
	fixedTitle,
	ellipsis
}) {
	const clas = classnames(
		"simple-table-container",
		`simple-table-${align}`,
		{
			"simple-table-border": bordered,
			'simple-table-ellipsis': ellipsis
		},
		className
	);
	function renderTitle() {
		const titleNode = titleColumns.map(item => {
			const { title, className, key } = item,
				clas = classnames("simple-column-title", className);
			return (
				<th className={clas} key={key}>
					<span className="simple-text">{title}</span>
				</th>
			);
		});
		return titleNode;
	}
	function renderRow() {
		return dataSources.map(item => {
			const { className, key } = item;
			const clas = classnames("simple-row", className);
			return (
				<tr className={clas} key={key}>
					{titleColumns.map(j => {
						const { dataIndex, className } = j,
							clas = classnames("simple-column", className);
						return (
							<td key={dataIndex} className={clas}>
								<span className="simple-text">{item[dataIndex]}</span>
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
				<thead className={classnames({ "simple-fixed-title": fixedTitle })}>
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
	ellipsis: true,
};

Table.propTypes = {
	titleColumns: propTypes.arrayOf(propTypes.object),
	dataSources: propTypes.arrayOf(propTypes.object),
	rowKey: propTypes.string,
	bordered: propTypes.bool,
	align: propTypes.oneOf(["left", "center", "right"]),
	fixedTitle: propTypes.bool,
	ellipsis: propTypes.bool
};

export default Table;
