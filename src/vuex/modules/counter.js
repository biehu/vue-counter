var state = {
	count: 0
};

var mutations = {
	INCREMENT(state) {
		state.count++;
	},
	
	DECREMENT(state) {
		state.count--;
	}
};

export default {
	state,
	mutations
};
