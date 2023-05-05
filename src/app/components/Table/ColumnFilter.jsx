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
export function DropdownFilter({ column: { filterValue, setFilter, preFilteredRows, id } }) {
	// Calculate the options for filtering
	// using the preFilteredRows
	const options = React.useMemo(() => {
		const options = new Set();
		preFilteredRows.forEach((row) => {
			options.add(row.values[id]);
		});
		return [...options.values()];
	}, [id, preFilteredRows]);

	const filterSelection = React.useMemo(() => {
		const filterSelection = new Set();
		options.map((option) => {
			Object.keys(option).map((key) => {
				filterSelection.add(key);
			});
		});
		return [...filterSelection.values()];
	}, []);

	// Render a multi-select box
	return (
		<select
			value={filterValue}
			onChange={(e) => {
				setFilter(e.target.value || undefined);
			}}
		>
			<option value="">All</option>
			{filterSelection.map((option, i) => (
				<option key={i} value={option}>
					{option}
				</option>
			))}
		</select>
	);
}
