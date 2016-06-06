<template>
	<div>
		<div>
			<h1>DEMO</h1>
		</div>
		
		<router-view></router-view>
	</div>
</template>

<script>
	import store from '../vuex/store';
	
	export default {
		store
	}
</script>