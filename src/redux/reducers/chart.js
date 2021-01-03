const initialState = {
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
};

export default function chartReducer(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
