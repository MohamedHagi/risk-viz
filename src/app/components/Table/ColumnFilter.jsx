import React from 'react';

export function ColumnFilter({ column: { filterValue, preFilteredRows, setFilter } }) {
	return (
		<input
			value={filterValue || ''}
			onChange={(e) => {
				setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
			}}
			placeholder={`Search...`}
		/>
	);
}

// a dropdown list filter
export function DropdownFilter({ column: { filterValue, setFilter, preFilteredRows } }) {
	//extracting the unique risk factors
	// using the preFilteredRows
	const options = React.useMemo(() => {
		const options = new Set();
		preFilteredRows.forEach((row) => {
			let rowArray = row.values.risks.split(',');
			rowArray.forEach((risk) => {
				options.add(risk);
			});
		});
		return [...options.values()];
	}, [preFilteredRows]);

	// Render a multi-select box
	return (
		<select
			value={filterValue}
			onChange={(e) => {
				setFilter(e.target.value || undefined);
			}}
		>
			<option value="">All</option>
			{options.map((option, i) => (
				<option key={i} value={option}>
					{option}
				</option>
			))}
		</select>
	);
}
