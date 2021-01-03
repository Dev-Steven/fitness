const initialState = {
	workouts: [
		{
			name: 'HIIT',
			calories: '320',
			duration: '30',
		},
		{
			name: 'Run',
			calories: '35',
			duration: '400',
		},
	],
	totalCal: 0,
};

export default function workoutReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_WORKOUT': {
			// console.log(state);
			const newWorkouts = state.workouts.concat(action.payload);
			// console.log(newWorkouts);
			const newState = {
				...state,
				workouts: newWorkouts,
			};
			console.log(newState);
			return newState;
		}
		default:
			return state;
	}
}
