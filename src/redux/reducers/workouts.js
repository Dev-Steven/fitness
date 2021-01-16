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
		standHours: 6,
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

function newWorkout(state, action, newWorkouts) {
	const updatedLabels = state.chart.labels.concat(action.payload.name);
	const updatedData = state.chart.datasets[0].data.concat(1);
	const newState = {
		...state,
		workouts: newWorkouts,
		totals: {
			...state.totals,
			calories: state.totals.calories + parseInt(action.payload.calories),
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
	return newState;
}

function existingWorkout(state, action, newWorkouts, labelIndex) {
	const updatedData = [...state.chart.datasets[0].data];
	updatedData[labelIndex] = updatedData[labelIndex] + 1;
	const newState = {
		...state,
		workouts: newWorkouts,
		totals: {
			...state.totals,
			calories: state.totals.calories + parseInt(action.payload.calories),
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
	return newState;
}

export default function workoutReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_WORKOUT': {
			const newWorkouts = state.workouts.concat(action.payload);
			const labelIndex = state.chart.labels.findIndex(
				label => label === action.payload.name
			);
			if (labelIndex >= 0) {
				return existingWorkout(state, action, newWorkouts, labelIndex);
			} else {
				return newWorkout(state, action, newWorkouts);
			}
		}
		default:
			return state;
	}
}
