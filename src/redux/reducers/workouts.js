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
	chart: {
		labels: ['Running', 'HIIT', 'Jump Rope', 'Weight Training', 'Cycling'],
		datasets: [
			{
				label: 'Workouts',
				backgroundColor: [
					'#B21F00',
					'#C9DE00',
					'#2FDE00',
					'#00A6B4',
					'#6800B4',
				],
				hoverBackgroundColor: [
					'#501800',
					'#4B5000',
					'#175000',
					'#003350',
					'#35014F',
				],
				data: [2, 1, 1, 3, 1],
			},
		],
	},
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
