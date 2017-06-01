// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import VueResource from 'vue-resource';
import App from './App';

import './common/stylus/index.styl';

Vue.use(VueResource);

Vue.config.productionTip = false;  // 关闭生产模式下给出的提示

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

router.push('goods');
