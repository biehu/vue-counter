import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import App from './components/App';
import Counter from './components/Counter';

Vue.use(Router);
Vue.use(VueResource);

var router = new Router();
router.map({
	'/counter': {
		component: Counter
	}
});

router.beforeEach(function () {
	window.scrollTo(0, 0);
});

router.start(App, '#app');
