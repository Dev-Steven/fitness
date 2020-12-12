const initialState = {
	workouts: [],
};

export default function (state = initialState, action) {
	console.log('action type: ', action.type);
	switch (action.type) {
		case 'ADD_WORKOUT': {
			console.log('ADD_WORKOUT', action.payload);
			return {
				...state,
				workouts: state.workouts.concat(action.payload),
			};
		}
		default:
			// console.log('default');
			return state;
	}
}
