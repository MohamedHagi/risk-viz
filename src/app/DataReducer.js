export const intialState = {
	data: [],
};

const DataReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'FILTER_BY_YEAR':
			console.log('FILTER_BY_YEAR', payload);
			return {
				...state,
				data: payload.data,
			};
		default:
			throw new Error(`No case for type ${type}`);
	}
};

export default DataReducer;
