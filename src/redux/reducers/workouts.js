const initialState = {
	workouts: [],
};

export default function workoutReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_WORKOUT': {
			console.log(action.payload);
			return {
				...state,
				workouts: state.workouts.concat(action.payload),
			};
		}
		default:
			return state;
	}
}
