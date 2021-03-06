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
	titleColumns: propTypes.arrayOf(propTypes.object), // Table 标题数据
	dataSources: propTypes.arrayOf(propTypes.object), // Table 内容数据
	rowKey: propTypes.string, // 表格行 key 的取值
	bordered: propTypes.bool, // 是否显示 td 边框
	align: propTypes.oneOf(["left", "center", "right"]), // 文字对齐方式
	fixedTitle: propTypes.bool, // 列是否固定，可选
	ellipsis: propTypes.bool // 文字超出是否隐藏打点展示
};

export default Table;
