import Vue from 'vue';
import axios from 'axios';

import VueSVGIcon from 'vue-svgicon';
import ElementUI from 'element-ui';
import './styles/index.scss';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import store from './store';
import moment from 'moment'; //导入文件 
// start-import
import echarts from 'echarts';
import Echarts from 'vue-echarts';
// end-import

Vue.config.productionTip = false;

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
import ref from 'vue-ref';
Vue.use(ref, {
   name: 'ant-ref'
});
Vue.use(VueSVGIcon);

// 设置语言
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

Vue.prototype.$moment = moment; //赋值使用

Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Antd);

// start-use
Vue.component('v-chart', Echarts);
// end-use

/* eslint-disable no-new */
new Vue({
   components: {
      App
   },
   router,
   store,
   render: h => h(App)
}).$mount('#app');
