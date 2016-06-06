export var increment = function ({dispatch}) {
	dispatch('INCREMENT');
};

export var decrement = function ({dispatch}) {
	dispatch('DECREMENT');
};

export var incrementIfOdd = function ({dispatch, state}) {
	if ((state.counter.count + 1) % 2 === 0) {
		dispatch('INCREMENT');
	}
};

export var incrementAsync = function ({dispatch}) {
	setTimeout(() => {
		dispatch('INCREMENT');
	}, 1000);
};
