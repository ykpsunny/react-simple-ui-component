import React, { useEffect, useState, useMemo } from "react";

import "./Table.scss";

import propTypes from "prop-types";

import classnames from "classnames";

function Table({ titleColumns, dataSources }) {
	function renderTitle() {
		const titleNode = titleColumns.map(item => {
			const { key, title, dataIndex, ...rest } = item;
			return (
				<th key={key} {...rest}>
					{title}
				</th>
			);
		});
		return titleNode;
	}
	function renderRow() {
		return dataSources.map(item => {
      const { key, className, ...rest } = item;
			return (
				<tr key={key}>
					{titleColumns.map(j => {
            const { dataIndex } = j;
						return <td key={dataIndex}>{item[dataIndex]}</td>;
					})}
				</tr>
			);
		});
	}
	return (
		<div className="simple-table-wrapper">
			<table className='table-container'>
				<thead>
					<tr>{renderTitle()}</tr>
				</thead>
				<tbody>{renderRow()}</tbody>
			</table>
		</div>
	);
}

Table.defaultProps = {};

Table.propTypes = {
	titleColumns: propTypes.arrayOf(propTypes.object),
	dataSources: propTypes.arrayOf(propTypes.object)
};

export default Table;
