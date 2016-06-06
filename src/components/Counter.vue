<template>
	<div>
		Clicked: {{count}} times
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementIfOdd">Increment if odd</button>
		<button @click="incrementAsync">Increment async</button>
	</div>
</template>

<script>
	import * as actions from '../vuex/actions';
	
	export default {
		vuex: {
			getters: {
				count: state => state.counter.count
			},
			
			actions: actions
		}
	};
</script>