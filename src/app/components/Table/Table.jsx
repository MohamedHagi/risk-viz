import React, { useMemo, useState, useEffect } from 'react';
import { useTable, usePagination, useSortBy, useFilters } from 'react-table';
import { ColumnFilter, DropdownFilter } from './ColumnFilter';
import useData from '../../DataContext';
import styles from '../../Home.module.css';

export default function Table() {
	const { data, view } = useData();

	data.forEach((property) => {
		let riskFactors = property['Risk Factors'];
		let riskObject = JSON.parse(riskFactors);
		property.risks = Object.keys(riskObject).join(',');
	});

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
			minWidth: 30,
			maxWidth: 150,
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
			{view === 'table' ? (
				<div className={styles.data}>
					<table {...getTableProps()}>
						<thead>
							{headerGroups.map((headerGroup, i) => (
								<tr {...headerGroup.getHeaderGroupProps()} key={i}>
									{headerGroup.headers.map((column, i) => (
										<th key={i}>
											<div {...column.getHeaderProps(column.getSortByToggleProps())}>
												{column.render('Header')}{' '}
												{column.isSorted ? (column.isSortedDesc ? '🔼' : ' 🔽') : ''}
											</div>
											<div>{column.canFilter ? column.render('Filter') : null}</div>
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
			) : (
				''
			)}
		</div>
	);
}
