import Vue from 'vue'
import VueRouter from 'vue-router'

import first from '@/components/olmap.vue'
import second from '@/components/SecondPage.vue'

Vue.use(VueRouter)

export default new VueRouter({  //导出路由配置
	routes: [{
			path: '/',
			component: first,
		},
		{
			path: '/second',
			component: second,
		},
	]
})