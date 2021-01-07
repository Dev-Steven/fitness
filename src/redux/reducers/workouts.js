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
	totals: {
		calories: 355,
		standHours: 0,
		exerciseMinutes: 430,
	},
	chart: {
		labels: ['HIIT', 'Run'],
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
				data: [1, 1],
			},
		],
	},
};

export default function workoutReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_WORKOUT': {
			console.log('payload: ', action.payload);
			const newWorkouts = state.workouts.concat(action.payload);
			const labelIndex = state.chart.labels.findIndex(
				label => label === action.payload.name
			);
			if (labelIndex >= 0) {
				const updatedData = [...state.chart.datasets[0].data];
				updatedData[labelIndex] = updatedData[labelIndex] + 1;
				const newState = {
					...state,
					workouts: newWorkouts,
					totals: {
						...state.totals,
						calories:
							state.totals.calories +
							parseInt(action.payload.calories),
						exerciseMinutes:
							state.totals.exerciseMinutes +
							parseInt(action.payload.duration),
					},
					chart: {
						...state.chart,
						datasets: [
							{
								...state.chart.datasets[0],
								data: updatedData,
							},
						],
					},
				};
				console.log('workout exists: ', newState);
				return newState;
			} else {
				const updatedLabels = state.chart.labels.concat(
					action.payload.name
				);
				const updatedData = state.chart.datasets[0].data.concat(1);
				const newState = {
					...state,
					workouts: newWorkouts,
					totals: {
						...state.totals,
						calories:
							state.totals.calories +
							parseInt(action.payload.calories),
						exerciseMinutes:
							state.totals.exerciseMinutes +
							parseInt(action.payload.duration),
					},
					chart: {
						...state.chart,
						labels: updatedLabels,
						datasets: [
							{
								...state.chart.datasets[0],
								data: updatedData,
							},
						],
					},
				};
				console.log('new workout: ', newState);
				return newState;
			}
		}
		default:
			return state;
	}
}
