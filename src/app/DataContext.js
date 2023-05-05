import { createContext, useReducer, useContext } from 'react';
import dataReducer, { intialState } from './dataReducer';
import { csv } from 'd3';

const DataContext = createContext(intialState);

export const DataProvider = ({ children }) => {
	const [state, dispatch] = useReducer(dataReducer, intialState);

	const filterByYear = (year) => {
		csv('/data.csv').then((data) => {
			const filteredData = data.filter((currentData) => currentData['Year'] === year);
			dispatch({
				type: 'FILTER_BY_YEAR',
				payload: {
					data: filteredData,
				},
			});
		});
	};

	const value = {
		data: state.data,
		filterByYear,
	};
	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useData = () => {
	const context = useContext(DataContext);
	if (context === undefined) {
		throw new Error('useData must be used within DataContext');
	}

	return context;
};

export default useData;
