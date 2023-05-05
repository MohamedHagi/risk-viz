import React, { useMemo, useState, useEffect } from 'react';
import { useTable, usePagination, useSortBy, useFilters } from 'react-table';
import { ColumnFilter, DropdownFilter } from './ColumnFilter';
import useData from '../../DataContext';
import styles from '../../Home.module.css';

export default function Table() {
	const { data } = useData();

	data.forEach((property) => {
		let riskFactors = property['Risk Factors'];
		property.risks = JSON.parse(riskFactors);
	});

	console.log(data);

	const tableData = useMemo(() => data, []);
	const columns = useMemo(
		() => [
			{
				Header: 'Asset Name',
				accessor: 'Asset Name',
				Filter: ColumnFilter,
			},
			{
				Header: 'Lat',
				accessor: 'Lat',
			},
			{
				Header: 'Long',
				accessor: 'Long',
			},
			{
				Header: 'Business Category',
				accessor: 'Business Category',
				Filter: ColumnFilter,
			},
			{
				Header: 'Risk Rating',
				accessor: 'Risk Rating',
			},
			{
				Header: 'Risk Factors',
				accessor: 'risks',
				Cell: (v) => {
					return Object.keys(v.value)
						.map((key) => `${key}`)
						.join(', ');
				},
				Filter: DropdownFilter,
			},
			{
				Header: 'Year',
				accessor: 'Year',
			},
		],
		[]
	);

	const defaultColumn = useMemo(
		() => ({
			// Let's set up our default Filter UI
			Filter: '',
		}),
		[]
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		state,
		setPageSize,
		prepareRow,
	} = useTable({ columns, data, defaultColumn }, useFilters, useSortBy, usePagination);

	useEffect(() => {
		setPageSize(5);
	}, []);
	const { pageIndex, pageSize } = state;
	return (
		<div>
			<div className={styles.data}>
				<table {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup, i) => (
							<tr {...headerGroup.getHeaderGroupProps()} key={i}>
								{headerGroup.headers.map((column, i) => (
									<th {...column.getHeaderProps(column.getSortByToggleProps())} key={i}>
										{column.render('Header')}
										{column.canFilter ? column.render('Filter') : null}
										{column.isSorted ? (column.isSortedDesc ? '🔼' : ' 🔽') : ''}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps}>
						{page.map((row, i) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps} key={i}>
									{row.cells.map((cell, i) => (
										<td {...cell.getCellProps} key={i}>
											{cell.render('Cell')}
										</td>
									))}
								</tr>
							);
						})}
					</tbody>
				</table>
				<div>
					<span>
						Page{' '}
						<strong>
							{pageIndex + 1} of {pageOptions.length}
						</strong>{' '}
					</span>
					{/* <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
						{[10, 5].map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								Show {pageSize}
							</option>
						))}
					</select> */}
					<button onClick={() => previousPage()} disabled={!canPreviousPage}>
						Previous
					</button>
					<button onClick={() => nextPage()} disabled={!canNextPage}>
						Next
					</button>
				</div>
			</div>
		</div>
	);
}
