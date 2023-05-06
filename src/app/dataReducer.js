export const intialState = {
	data: [],
	view: 'map',
};

const DataReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'FILTER_BY_YEAR':
			return {
				...state,
				data: payload.data,
			};
		case 'UPDATE_VIEW':
			return {
				...state,
				view: payload.view,
			};
		default:
			throw new Error(`No case for type ${type}`);
	}
};

export default DataReducer;
