import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import useData from '../DataContext';
import styles from '../Home.module.css';

export default function Menu() {
	const { view, filterByYear, updateView } = useData();
	const [year, setYear] = useState({ value: '2070', label: '2070' });
	const [viewValue, setViewValue] = useState('map');

	useEffect(() => {
		filterByYear(year.value);
		updateView(viewValue);
	}, [year, viewValue]);

	console.log(view);

	const options = [
		{ value: '2070', label: '2070' },
		{ value: '2060', label: '2060' },
		{ value: '2050', label: '2050' },
		{ value: '2040', label: '2040' },
		{ value: '2030', label: '2030' },
	];

	return (
		<div>
			<div className={styles.years}>
				<p>Enter Year: </p>
				<Select defaultValue={year} onChange={setYear} options={options} />
			</div>
			<div className={styles.menu}>
				<button className={styles.button} onClick={() => setViewValue('map')}>
					Map
				</button>
				<button className={styles.button} onClick={() => setViewValue('table')}>
					Table
				</button>
				<button className={styles.button} onClick={() => setViewValue('chart')}>
					Chart
				</button>
			</div>
		</div>
	);
}
